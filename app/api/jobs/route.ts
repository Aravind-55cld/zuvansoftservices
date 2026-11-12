import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabase, Job } from "@/lib/supabase";

const DATA_FILE = path.join(process.cwd(), "data", "jobs.json");

function readLocalJobs(): Job[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (e) {
    console.error("Error reading local jobs.json:", e);
  }
  return [];
}

function writeLocalJobs(jobs: Job[]) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(jobs, null, 2), "utf-8");
  } catch (e) {
    console.error("Error writing local jobs.json:", e);
  }
}

// GET all jobs
export async function GET() {
  try {
    // 1. Try Supabase first
    const { data, error } = await supabase
      .from("jobs")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      return NextResponse.json({ source: "supabase", jobs: data });
    }

    // 2. Fallback to local storage
    const local = readLocalJobs();
    return NextResponse.json({ source: "local", jobs: local });
  } catch (err: any) {
    const local = readLocalJobs();
    return NextResponse.json({ source: "local", jobs: local });
  }
}

// POST new job
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newJob: Job = {
      id: body.id || `job-${Date.now()}`,
      title: body.title,
      department: body.department || "Engineering",
      location: body.location || "Hyderabad / Hybrid",
      work_type: body.work_type || "Full-time",
      experience: body.experience || "3-5 Years",
      salary_range: body.salary_range || "Competitive",
      description: body.description,
      requirements: Array.isArray(body.requirements) ? body.requirements : [],
      skills: Array.isArray(body.skills) ? body.skills : [],
      is_active: body.is_active !== undefined ? body.is_active : true,
      created_at: new Date().toISOString(),
    };

    // Try Supabase insert
    try {
      await supabase.from("jobs").insert([newJob]);
    } catch (e) {
      // Supabase table may not exist yet
    }

    // Always update local store
    const local = readLocalJobs();
    const updated = [newJob, ...local];
    writeLocalJobs(updated);

    return NextResponse.json({ success: true, job: newJob });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

// PATCH update job status
export async function PATCH(request: Request) {
  try {
    const { id, is_active } = await request.json();

    try {
      await supabase.from("jobs").update({ is_active }).eq("id", id);
    } catch (e) {}

    const local = readLocalJobs();
    const updated = local.map((j) => (j.id === id ? { ...j, is_active } : j));
    writeLocalJobs(updated);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

// DELETE job
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    }

    try {
      await supabase.from("jobs").delete().eq("id", id);
    } catch (e) {}

    const local = readLocalJobs();
    const updated = local.filter((j) => j.id !== id);
    writeLocalJobs(updated);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

