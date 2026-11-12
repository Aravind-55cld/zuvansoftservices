import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabase, JobApplication } from "@/lib/supabase";

const DATA_FILE = path.join(process.cwd(), "data", "applications.json");

function readLocalApps(): JobApplication[] {
  try {
    if (fs.existsSync(DATA_FILE)) {
      const content = fs.readFileSync(DATA_FILE, "utf-8");
      return JSON.parse(content);
    }
  } catch (e) {
    console.error("Error reading local applications.json:", e);
  }
  return [];
}

function writeLocalApps(apps: JobApplication[]) {
  try {
    const dir = path.dirname(DATA_FILE);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(apps, null, 2), "utf-8");
  } catch (e) {
    console.error("Error writing local applications.json:", e);
  }
}

// GET all applications
export async function GET() {
  try {
    // 1. Try Supabase
    const { data, error } = await supabase
      .from("job_applications")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data && data.length > 0) {
      return NextResponse.json({ source: "supabase", applications: data });
    }

    // 2. Fallback to local
    const local = readLocalApps();
    return NextResponse.json({ source: "local", applications: local });
  } catch (err: any) {
    const local = readLocalApps();
    return NextResponse.json({ source: "local", applications: local });
  }
}

// POST new application
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newApp: JobApplication = {
      id: body.id || `app-${Date.now()}`,
      job_id: body.job_id,
      full_name: body.full_name,
      email: body.email,
      phone: body.phone,
      linkedin_url: body.linkedin_url || "",
      resume_url: body.resume_url,
      cover_note: body.cover_note || "",
      status: body.status || "New",
      created_at: new Date().toISOString(),
    };

    // Try Supabase insert
    try {
      await supabase.from("job_applications").insert([newApp]);
    } catch (e) {}

    // Always update local store
    const local = readLocalApps();
    const updated = [newApp, ...local];
    writeLocalApps(updated);

    return NextResponse.json({ success: true, application: newApp });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

// PATCH update application status
export async function PATCH(request: Request) {
  try {
    const { id, status } = await request.json();

    try {
      await supabase.from("job_applications").update({ status }).eq("id", id);
    } catch (e) {}

    const local = readLocalApps();
    const updated = local.map((a) => (a.id === id ? { ...a, status } : a));
    writeLocalApps(updated);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

// DELETE application
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ success: false, message: "ID is required" }, { status: 400 });
    }

    try {
      await supabase.from("job_applications").delete().eq("id", id);
    } catch (e) {}

    const local = readLocalApps();
    const updated = local.filter((a) => a.id !== id);
    writeLocalApps(updated);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, message: err.message }, { status: 500 });
  }
}

