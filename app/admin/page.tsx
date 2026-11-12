"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Job, JobApplication } from "@/lib/supabase";
import { useToast } from "@/components/ToastContext";
import {
  Briefcase,
  Users,
  Plus,
  LogOut,
  ExternalLink,
  CheckCircle2,
  XCircle,
  Trash2,
  Edit3,
  Eye,
  Mail,
  Phone,
  FileText,
  Linkedin,
  RefreshCw,
  Search,
  Filter,
  Copy,
  Database,
  Calendar,
  AlertTriangle,
  Building,
  MapPin,
  Clock,
  IndianRupee,
  X,
  Server,
} from "lucide-react";

export default function AdminDashboardPage() {
  const router = useRouter();
  const { showToast } = useToast();

  const [adminEmail, setAdminEmail] = useState("admin@zuvansoftsol.com");
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"jobs" | "applications" | "schema">("jobs");

  // Data states
  const [jobs, setJobs] = useState<Job[]>([]);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loadingData, setLoadingData] = useState(false);
  const [dataSource, setDataSource] = useState<string>("local");

  // Filters
  const [jobSearch, setJobSearch] = useState("");
  const [appFilterJob, setAppFilterJob] = useState("all");
  const [appFilterStatus, setAppFilterStatus] = useState("all");

  // New Job Modal state
  const [showJobModal, setShowJobModal] = useState(false);
  const [modalSaving, setModalSaving] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    department: "Engineering",
    location: "Hyderabad / Hybrid",
    work_type: "Full-time",
    experience: "3-5 Years",
    salary_range: "Competitive",
    description: "",
    requirements: "",
    skills: "",
    is_active: true,
  });

  // Selected applicant modal
  const [selectedApp, setSelectedApp] = useState<JobApplication | null>(null);

  // 1. Check Authentication via Token
  useEffect(() => {
    const token = localStorage.getItem("zuvan_admin_token");
    const email = localStorage.getItem("zuvan_admin_email");
    if (!token) {
      router.push("/admin/login");
    } else {
      if (email) setAdminEmail(email);
      loadDashboardData();
      setLoading(false);
    }
  }, [router]);

  // 2. Load Jobs & Applications via API
  const loadDashboardData = async () => {
    setLoadingData(true);
    try {
      // Fetch Jobs
      const jobsRes = await fetch("/api/jobs");
      const jobsJson = await jobsRes.json();
      if (jobsJson.jobs) {
        setJobs(jobsJson.jobs);
        setDataSource(jobsJson.source || "local");
      }

      // Fetch Applications
      const appsRes = await fetch("/api/applications");
      const appsJson = await appsRes.json();
      if (appsJson.applications) {
        setApplications(appsJson.applications);
      }
    } catch (err: any) {
      console.error("Dashboard data load error:", err);
    } finally {
      setLoadingData(false);
    }
  };

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("zuvan_admin_token");
    localStorage.removeItem("zuvan_admin_email");
    showToast("Signed out successfully.", "info");
    router.push("/admin/login");
  };

  // Toggle Job Active status
  const handleToggleJob = async (jobId: string, currentStatus: boolean) => {
    try {
      const res = await fetch("/api/jobs", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: jobId, is_active: !currentStatus }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed");

      setJobs((prev) =>
        prev.map((j) => (j.id === jobId ? { ...j, is_active: !currentStatus } : j))
      );
      showToast(
        `Job ${!currentStatus ? "activated and published" : "paused/hidden"}.`,
        "success"
      );
    } catch (err: any) {
      showToast(err.message || "Failed to update job status.", "error");
    }
  };

  // Delete Job
  const handleDeleteJob = async (jobId: string, title: string) => {
    if (!window.confirm(`Are you sure you want to delete the job posting "${title}"?`)) {
      return;
    }
    try {
      const res = await fetch(`/api/jobs?id=${encodeURIComponent(jobId)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed");

      setJobs((prev) => prev.filter((j) => j.id !== jobId));
      showToast("Job posting deleted.", "success");
    } catch (err: any) {
      showToast(err.message || "Failed to delete job.", "error");
    }
  };

  // Update Application Status
  const handleUpdateAppStatus = async (appId: string, newStatus: string) => {
    try {
      const res = await fetch("/api/applications", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: appId, status: newStatus }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed");

      setApplications((prev) =>
        prev.map((a) => (a.id === appId ? { ...a, status: newStatus } : a))
      );
      showToast(`Applicant status changed to ${newStatus}.`, "success");
    } catch (err: any) {
      showToast(err.message || "Failed to update applicant status.", "error");
    }
  };

  // Delete Application
  const handleDeleteApp = async (appId: string) => {
    if (!window.confirm("Are you sure you want to delete this applicant submission?")) {
      return;
    }
    try {
      const res = await fetch(`/api/applications?id=${encodeURIComponent(appId)}`, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed");

      setApplications((prev) => prev.filter((a) => a.id !== appId));
      if (selectedApp?.id === appId) setSelectedApp(null);
      showToast("Application deleted.", "success");
    } catch (err: any) {
      showToast(err.message || "Failed to delete application.", "error");
    }
  };

  // Submit New Job Form
  const handleCreateJob = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newJob.title || !newJob.description) {
      showToast("Job Title and Description are required.", "error");
      return;
    }

    setModalSaving(true);
    try {
      const requirementsArr = newJob.requirements
        .split("\n")
        .map((r) => r.trim())
        .filter((r) => r.length > 0);

      const skillsArr = newJob.skills
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

      const payload = {
        title: newJob.title,
        department: newJob.department,
        location: newJob.location,
        work_type: newJob.work_type,
        experience: newJob.experience,
        salary_range: newJob.salary_range || "Competitive",
        description: newJob.description,
        requirements: requirementsArr,
        skills: skillsArr,
        is_active: newJob.is_active,
      };

      const res = await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || "Failed");

      setJobs((prev) => [data.job, ...prev]);
      setShowJobModal(false);
      setNewJob({
        title: "",
        department: "Engineering",
        location: "Hyderabad / Hybrid",
        work_type: "Full-time",
        experience: "3-5 Years",
        salary_range: "Competitive",
        description: "",
        requirements: "",
        skills: "",
        is_active: true,
      });
      showToast("Job published successfully to the website!", "success");
    } catch (err: any) {
      showToast(err.message || "Failed to create job posting.", "error");
    } finally {
      setModalSaving(false);
    }
  };

  const copySqlSchema = () => {
    const sql = `-- Zuvan Software Services Supabase SQL
create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  department text not null,
  location text not null,
  work_type text default 'Full-time',
  experience text not null,
  salary_range text,
  description text not null,
  requirements text[] default '{}',
  skills text[] default '{}',
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

create table if not exists public.job_applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references public.jobs(id) on delete set null,
  full_name text not null,
  email text not null,
  phone text not null,
  linkedin_url text,
  resume_url text not null,
  cover_note text,
  status text default 'New',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.jobs enable row level security;
alter table public.job_applications enable row level security;

create policy "Public can view active jobs" on public.jobs for select using (is_active = true);
create policy "Public can insert applications" on public.job_applications for insert with check (true);
create policy "Admin has full access to jobs" on public.jobs for all using (auth.role() = 'authenticated');
create policy "Admin can view applications" on public.job_applications for select using (auth.role() = 'authenticated');
create policy "Admin can update applications" on public.job_applications for update using (auth.role() = 'authenticated');
create policy "Admin can delete applications" on public.job_applications for delete using (auth.role() = 'authenticated');`;

    navigator.clipboard.writeText(sql);
    showToast("SQL script copied to clipboard! Paste it into Supabase SQL Editor whenever you want.", "success");
  };

  // Filtered lists
  const filteredJobs = jobs.filter((j) =>
    jobSearch
      ? j.title.toLowerCase().includes(jobSearch.toLowerCase()) ||
        j.department.toLowerCase().includes(jobSearch.toLowerCase()) ||
        j.location.toLowerCase().includes(jobSearch.toLowerCase())
      : true
  );

  const filteredApps = applications.filter((a) => {
    const matchesJob = appFilterJob === "all" || a.job_id === appFilterJob;
    const matchesStatus = appFilterStatus === "all" || (a.status || "New") === appFilterStatus;
    return matchesJob && matchesStatus;
  });

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100/70 pb-20">
      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-40">
              <Image
                src="/assets/images/logo-main-transparent.png"
                alt="Zuvan"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
            <div className="border-l border-slate-200 pl-3">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold uppercase bg-blue-50 text-blue-700 border border-blue-200">
                Admin Portal
              </span>
              <p className="text-[11px] text-slate-500 mt-0.5">{adminEmail}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/jobs"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 hover:border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              <span>View Live Jobs Page</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </Link>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-red-200 hover:bg-red-50 text-xs font-semibold text-red-600 transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Status indicator bar */}
        <div className="mb-6 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-slate-900">
                  Admin Dashboard Ready
                </h4>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                  Storage Active ({dataSource === "supabase" ? "Supabase Cloud" : "Local Database"})
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                You can post jobs and receive applications right now. Whenever you run the SQL script in Supabase, cloud syncing takes over automatically.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setActiveTab("schema")}
              className="btn-secondary py-2 px-3 text-xs font-bold inline-flex items-center gap-1.5"
            >
              <Database className="w-3.5 h-3.5 text-blue-600" />
              <span>Supabase SQL Info</span>
            </button>
          </div>
        </div>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Active Openings
              </span>
              <Briefcase className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">
              {jobs.filter((j) => j.is_active).length}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">
              {jobs.length} total roles posted
            </p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Total Applicants
              </span>
              <Users className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-extrabold text-slate-900">
              {applications.length}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Resumes received</p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Pending Review
              </span>
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <div className="text-2xl font-extrabold text-amber-600">
              {applications.filter((a) => (a.status || "New") === "New").length}
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Require screening</p>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Data Storage
              </span>
              <Server className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5 mt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>{dataSource === "supabase" ? "Supabase Live" : "Local JSON Engine"}</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 truncate">
              {dataSource === "supabase" ? "ezxqgvacpeewtxmkeuse" : "Instant local persistence"}
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-between border-b border-slate-200 mb-6 gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("jobs")}
              className={`px-4 py-3 text-sm font-bold border-b-2 transition flex items-center gap-2 ${
                activeTab === "jobs"
                  ? "border-blue-600 text-blue-700 bg-white rounded-t-xl"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Job Openings ({jobs.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("applications")}
              className={`px-4 py-3 text-sm font-bold border-b-2 transition flex items-center gap-2 ${
                activeTab === "applications"
                  ? "border-blue-600 text-blue-700 bg-white rounded-t-xl"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Candidate Applications ({applications.length})</span>
              {applications.filter((a) => (a.status || "New") === "New").length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-amber-500 text-white font-extrabold">
                  {applications.filter((a) => (a.status || "New") === "New").length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("schema")}
              className={`px-4 py-3 text-sm font-bold border-b-2 transition flex items-center gap-2 ${
                activeTab === "schema"
                  ? "border-blue-600 text-blue-700 bg-white rounded-t-xl"
                  : "border-transparent text-slate-600 hover:text-slate-900"
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Supabase SQL Setup</span>
            </button>
          </div>

          {activeTab === "jobs" && (
            <button
              onClick={() => setShowJobModal(true)}
              className="btn-primary py-2.5 px-4 text-xs font-bold inline-flex items-center gap-1.5 shadow-md shadow-blue-600/20"
            >
              <Plus className="w-4 h-4" />
              <span>Post New Job</span>
            </button>
          )}
        </div>

        {/* ============================================================
             TAB 1: JOBS MANAGEMENT
        ============================================================ */}
        {activeTab === "jobs" && (
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="bg-white rounded-xl p-4 border border-slate-200 flex items-center justify-between gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={jobSearch}
                  onChange={(e) => setJobSearch(e.target.value)}
                  placeholder="Search by job title, department, or location..."
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button
                onClick={loadDashboardData}
                disabled={loadingData}
                className="px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 inline-flex items-center gap-1.5"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loadingData ? "animate-spin" : ""}`} />
                <span>Refresh</span>
              </button>
            </div>

            {/* Jobs List */}
            {filteredJobs.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-base text-slate-800">
                  No Job Openings Found
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1 mb-5">
                  {jobSearch
                    ? "No openings match your search filter."
                    : "Post your first job opening to start receiving talent applications."}
                </p>
                <button
                  onClick={() => setShowJobModal(true)}
                  className="btn-primary py-2.5 px-4 text-xs font-bold inline-flex items-center gap-1.5"
                >
                  <Plus className="w-4 h-4" />
                  <span>Post Your First Opening</span>
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="py-3 px-4">Role Title &amp; Dept</th>
                        <th className="py-3 px-4">Location &amp; Type</th>
                        <th className="py-3 px-4">Experience</th>
                        <th className="py-3 px-4">Salary</th>
                        <th className="py-3 px-4">Applications</th>
                        <th className="py-3 px-4">Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredJobs.map((job) => {
                        const appCount = applications.filter((a) => a.job_id === job.id).length;
                        return (
                          <tr key={job.id} className="hover:bg-slate-50/80 transition-colors">
                            <td className="py-4 px-4">
                              <div className="font-heading font-bold text-sm text-slate-900">
                                {job.title}
                              </div>
                              <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                                {job.department}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-slate-600">
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                                <span>{job.location}</span>
                              </div>
                              <span className="text-[11px] text-slate-400 mt-0.5 block">
                                {job.work_type}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-slate-600 font-medium">
                              {job.experience}
                            </td>
                            <td className="py-4 px-4 text-slate-600 font-medium">
                              {job.salary_range || "Competitive"}
                            </td>
                            <td className="py-4 px-4">
                              <button
                                onClick={() => {
                                  setAppFilterJob(job.id);
                                  setActiveTab("applications");
                                }}
                                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs transition"
                              >
                                <Users className="w-3 h-3" />
                                <span>{appCount} Applicants</span>
                              </button>
                            </td>
                            <td className="py-4 px-4">
                              <button
                                onClick={() => handleToggleJob(job.id, job.is_active)}
                                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider transition ${
                                  job.is_active
                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                                    : "bg-slate-100 text-slate-500 border border-slate-200"
                                }`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    job.is_active ? "bg-emerald-500" : "bg-slate-400"
                                  }`}
                                />
                                <span>{job.is_active ? "Active" : "Closed"}</span>
                              </button>
                            </td>
                            <td className="py-4 px-4 text-right">
                              <div className="inline-flex items-center gap-2">
                                <button
                                  onClick={() => handleDeleteJob(job.id, job.title)}
                                  className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                                  title="Delete Job"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================
             TAB 2: CANDIDATE APPLICATIONS
        ============================================================ */}
        {activeTab === "applications" && (
          <div className="space-y-4">
            {/* Filters */}
            <div className="bg-white rounded-xl p-4 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-600">Filter Role:</span>
                  <select
                    value={appFilterJob}
                    onChange={(e) => setAppFilterJob(e.target.value)}
                    className="text-xs py-1.5 px-3 rounded-lg border border-slate-200 bg-white font-medium"
                  >
                    <option value="all">All Roles ({applications.length})</option>
                    {jobs.map((j) => (
                      <option key={j.id} value={j.id}>
                        {j.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-600">Status:</span>
                  <select
                    value={appFilterStatus}
                    onChange={(e) => setAppFilterStatus(e.target.value)}
                    className="text-xs py-1.5 px-3 rounded-lg border border-slate-200 bg-white font-medium"
                  >
                    <option value="all">All Statuses</option>
                    <option value="New">New</option>
                    <option value="Reviewed">Reviewed</option>
                    <option value="Shortlisted">Shortlisted</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </div>
              </div>

              <button
                onClick={loadDashboardData}
                disabled={loadingData}
                className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-semibold text-slate-700 inline-flex items-center gap-1.5"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loadingData ? "animate-spin" : ""}`} />
                <span>Refresh</span>
              </button>
            </div>

            {/* Applications List */}
            {filteredApps.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
                <Users className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h3 className="font-heading font-bold text-base text-slate-800">
                  No Applications Yet
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                  When prospective candidates apply through the &apos;/jobs&apos; page, their details, LinkedIn profiles, and resumes will appear here in real-time.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredApps.map((app) => {
                  const job = jobs.find((j) => j.id === app.job_id);
                  const statusColors: Record<string, string> = {
                    New: "bg-blue-50 text-blue-700 border-blue-200",
                    Reviewed: "bg-amber-50 text-amber-700 border-amber-200",
                    Shortlisted: "bg-emerald-50 text-emerald-700 border-emerald-200",
                    Rejected: "bg-slate-100 text-slate-500 border-slate-200",
                  };

                  return (
                    <div
                      key={app.id}
                      className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                    >
                      <div>
                        {/* Header */}
                        <div className="flex items-start justify-between gap-2 mb-3">
                          <div>
                            <h4 className="font-heading font-bold text-sm text-slate-900">
                              {app.full_name}
                            </h4>
                            <span className="text-[11px] font-semibold text-blue-700 block mt-0.5">
                              {job ? job.title : "General Candidate Submission"}
                            </span>
                          </div>
                          <select
                            value={app.status || "New"}
                            onChange={(e) =>
                              app.id && handleUpdateAppStatus(app.id, e.target.value)
                            }
                            className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full border ${
                              statusColors[app.status || "New"] || "bg-slate-100 text-slate-600"
                            }`}
                          >
                            <option value="New">New</option>
                            <option value="Reviewed">Reviewed</option>
                            <option value="Shortlisted">Shortlisted</option>
                            <option value="Rejected">Rejected</option>
                          </select>
                        </div>

                        {/* Contact details */}
                        <div className="space-y-1.5 text-xs text-slate-600 my-3">
                          <a
                            href={`mailto:${app.email}`}
                            className="flex items-center gap-2 hover:text-blue-700 truncate"
                          >
                            <Mail className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                            <span className="truncate">{app.email}</span>
                          </a>

                          <a
                            href={`tel:${app.phone}`}
                            className="flex items-center gap-2 hover:text-blue-700"
                          >
                            <Phone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                            <span>{app.phone}</span>
                          </a>

                          {app.linkedin_url && (
                            <a
                              href={app.linkedin_url}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-2 text-blue-600 hover:underline truncate"
                            >
                              <Linkedin className="w-3.5 h-3.5 flex-shrink-0" />
                              <span className="truncate">LinkedIn Profile</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>

                        {/* Cover Note */}
                        {app.cover_note && (
                          <div className="mt-3 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px] text-slate-600 leading-relaxed italic line-clamp-3">
                            &quot;{app.cover_note}&quot;
                          </div>
                        )}
                      </div>

                      {/* Footer Actions */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                        <a
                          href={app.resume_url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-blue-700 text-white font-bold text-xs transition"
                        >
                          <FileText className="w-3.5 h-3.5" />
                          <span>View Resume</span>
                          <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                        </a>

                        <button
                          onClick={() => app.id && handleDeleteApp(app.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition"
                          title="Delete submission"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ============================================================
             TAB 3: SQL SCHEMA & SETUP HELPER
        ============================================================ */}
        {activeTab === "schema" && (
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <h3 className="font-heading font-extrabold text-lg text-slate-900">
                  Supabase Cloud Database Setup (Optional)
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Your website already works seamlessly with the local database engine. Whenever you wish to switch to Supabase Cloud, run this script in the Supabase SQL Editor.
                </p>
              </div>

              <button
                onClick={copySqlSchema}
                className="btn-gold py-2.5 px-4 text-xs font-bold inline-flex items-center gap-1.5 shadow-md"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Entire Script</span>
              </button>
            </div>

            <ol className="list-decimal list-inside text-xs text-slate-600 space-y-2 mb-6">
              <li>Open your Supabase dashboard at <a href="https://supabase.com/dashboard/project/ezxqgvacpeewtxmkeuse" target="_blank" className="text-blue-600 underline font-semibold">ezxqgvacpeewtxmkeuse</a></li>
              <li>Click on the <strong>SQL Editor</strong> tab on the left navigation bar.</li>
              <li>Click <strong>New Query</strong>, paste the script below, and click <strong>RUN</strong>.</li>
            </ol>

            <pre className="bg-slate-900 text-slate-100 p-4 rounded-xl text-[11px] overflow-x-auto font-mono leading-relaxed max-h-[450px]">
{`-- 1. Create Jobs Table
create table if not exists public.jobs (
  id text primary key,
  title text not null,
  department text not null,
  location text not null,
  work_type text default 'Full-time',
  experience text not null,
  salary_range text,
  description text not null,
  requirements text[] default '{}',
  skills text[] default '{}',
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create Job Applications Table
create table if not exists public.job_applications (
  id text primary key,
  job_id text,
  full_name text not null,
  email text not null,
  phone text not null,
  linkedin_url text,
  resume_url text not null,
  cover_note text,
  status text default 'New',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Row-Level Security Policies
alter table public.jobs enable row level security;
alter table public.job_applications enable row level security;

create policy "Public can view active jobs" on public.jobs for select using (is_active = true);
create policy "Public can insert applications" on public.job_applications for insert with check (true);
create policy "Admin has full access to jobs" on public.jobs for all using (true);
create policy "Admin can view applications" on public.job_applications for select using (true);
create policy "Admin can update applications" on public.job_applications for update using (true);
create policy "Admin can delete applications" on public.job_applications for delete using (true);`}
            </pre>
          </div>
        )}
      </main>

      {/* ============================================================
           MODAL: POST NEW JOB
      ============================================================ */}
      {showJobModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full my-8 overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-base text-slate-900">
                    Post a New Job Opening
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    This position will be published live on the Zuvan Careers portal.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowJobModal(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateJob} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Job Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior DevOps Engineer / Technical Lead"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 font-medium"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Department *
                  </label>
                  <select
                    value={newJob.department}
                    onChange={(e) => setNewJob({ ...newJob, department: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white font-medium"
                  >
                    <option value="Engineering">Engineering</option>
                    <option value="IT Consulting">IT Consulting</option>
                    <option value="Talent Acquisition">Talent Acquisition</option>
                    <option value="Sales & Accounts">Sales &amp; Accounts</option>
                    <option value="Executive & Operations">Executive &amp; Operations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Work Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Hyderabad / Hybrid or Pan-India Remote"
                    value={newJob.location}
                    onChange={(e) => setNewJob({ ...newJob, location: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Employment Type
                  </label>
                  <select
                    value={newJob.work_type}
                    onChange={(e) => setNewJob({ ...newJob, work_type: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 bg-white font-medium"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Contract (C2H)">Contract (C2H)</option>
                    <option value="Part-time">Part-time</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Experience Level *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 4-7 Years"
                    value={newJob.experience}
                    onChange={(e) => setNewJob({ ...newJob, experience: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                    Salary Range
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹15 - 25 LPA"
                    value={newJob.salary_range}
                    onChange={(e) => setNewJob({ ...newJob, salary_range: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Skills &amp; Technologies (comma separated)
                </label>
                <input
                  type="text"
                  placeholder="e.g. React, Next.js, Node.js, PostgreSQL, AWS"
                  value={newJob.skills}
                  onChange={(e) => setNewJob({ ...newJob, skills: e.target.value })}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-slate-300 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Role Overview &amp; Responsibilities *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the role, day-to-day impact, and who would be a great fit..."
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Key Requirements (1 per line)
                </label>
                <textarea
                  rows={4}
                  placeholder="Enter each requirement on a new line:&#10;5+ years building distributed cloud systems&#10;Hands-on TypeScript & Next.js production knowledge&#10;Strong communicator and mentor"
                  value={newJob.requirements}
                  onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 font-medium font-mono text-[11px]"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="is_active_check"
                  checked={newJob.is_active}
                  onChange={(e) => setNewJob({ ...newJob, is_active: e.target.checked })}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <label htmlFor="is_active_check" className="text-xs font-bold text-slate-700">
                  Publish immediately (visible to all candidates on /jobs)
                </label>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowJobModal(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={modalSaving}
                  className="btn-primary py-2.5 px-6 text-xs font-bold inline-flex items-center gap-2"
                >
                  {modalSaving ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Publishing...</span>
                    </>
                  ) : (
                    <span>Publish Job Opening</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
