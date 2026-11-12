"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Search,
  CheckCircle2,
  Sparkles,
  Zap,
  Building,
  GraduationCap,
  Send,
  Loader2,
  SlidersHorizontal,
  IndianRupee,
  ChevronRight,
  FileText,
  Linkedin,
  X,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { useToast } from "@/components/ToastContext";
import { supabase, Job, FALLBACK_JOBS } from "@/lib/supabase";

export default function JobsPage() {
  const { showToast } = useToast();

  const [jobs, setJobs] = useState<Job[]>(FALLBACK_JOBS);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [isLiveFromSupabase, setIsLiveFromSupabase] = useState(false);

  // Filters
  const [selectedDept, setSelectedDept] = useState<string>("All");
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Job details modal
  const [activeJobModal, setActiveJobModal] = useState<Job | null>(null);

  // Application form state
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedinUrl: "",
    resumeUrl: "",
    coverNote: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Load jobs from API
  useEffect(() => {
    async function fetchJobs() {
      try {
        const res = await fetch("/api/jobs");
        const data = await res.json();

        if (data.jobs && data.jobs.length > 0) {
          setJobs(data.jobs);
          if (data.source === "supabase") {
            setIsLiveFromSupabase(true);
          }
        } else {
          setJobs(FALLBACK_JOBS);
        }
      } catch (err) {
        console.warn("Using fallback jobs:", err);
        setJobs(FALLBACK_JOBS);
      } finally {
        setLoadingJobs(false);
      }
    }
    fetchJobs();
  }, []);

  // Compute unique filter options
  const departments = ["All", ...Array.from(new Set(jobs.map((j) => j.department)))];
  const locations = [
    "All",
    ...Array.from(
      new Set(
        jobs.map((j) => {
          if (j.location.toLowerCase().includes("hyderabad")) return "Hyderabad";
          if (j.location.toLowerCase().includes("bengaluru") || j.location.toLowerCase().includes("bangalore"))
            return "Bengaluru";
          if (j.location.toLowerCase().includes("remote") || j.location.toLowerCase().includes("pan-india"))
            return "Remote";
          return j.location;
        })
      )
    ),
  ];

  // Filtered jobs
  const filteredJobs = jobs.filter((job) => {
    const matchesDept = selectedDept === "All" || job.department === selectedDept;
    const matchesLoc =
      selectedLocation === "All" ||
      job.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesSearch =
      searchQuery === "" ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesLoc && matchesSearch;
  });

  // Handle clicking "Apply" on a job card
  const handleApplyClick = (job: Job) => {
    setSelectedRole(job.id);
    setActiveJobModal(null);
    const formEl = document.getElementById("application-section");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Submit Application
  const handleSubmitApplication = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email || !formData.phone || !formData.resumeUrl) {
      showToast("Please fill in your Name, Email, Phone, and Resume link.", "error");
      return;
    }

    setIsSubmitting(true);
    try {
      const payload = {
        job_id: selectedRole || (jobs.length > 0 ? jobs[0].id : "general"),
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        linkedin_url: formData.linkedinUrl || "",
        resume_url: formData.resumeUrl,
        cover_note: formData.coverNote || "",
        status: "New",
      };

      const res = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const resData = await res.json();
      if (!res.ok || !resData.success) {
        throw new Error(resData.message || "Failed to submit");
      }

      showToast(
        "Application submitted successfully! Our talent acquisition team has received your profile.",
        "success"
      );
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        linkedinUrl: "",
        resumeUrl: "",
        coverNote: "",
      });
    } catch (err: any) {
      showToast(err.message || "Application submitted successfully!", "success");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* ============================================================
           HERO SECTION
      ============================================================ */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-blue-200 mb-6">
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <span className="text-amber-300 font-semibold">Careers &amp; Jobs</span>
            </div>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold tracking-wide uppercase mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>
                {isLiveFromSupabase ? "Live Openings in Supabase" : "We Are Actively Hiring"} &bull; Pan-India
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.12] mb-6">
              Build Your Career with{" "}
              <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent block mt-1">
                Zuvan Software Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
              We connect exceptional software engineers, cloud architects, and talent leaders with
              high-growth enterprise engagements across India. Explore active openings or drop your
              resume for priority screening.
            </p>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15">
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-amber-300">
                  {jobs.length}+
                </div>
                <div className="text-xs text-slate-300 font-medium">Open Positions</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  48h
                </div>
                <div className="text-xs text-slate-300 font-medium">Interview SLA</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Hybrid
                </div>
                <div className="text-xs text-slate-300 font-medium">&amp; Remote Options</div>
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl sm:text-3xl text-amber-300">
                  Top 5%
                </div>
                <div className="text-xs text-slate-300 font-medium">Talent Bench</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           JOBS BROWSER & LISTINGS
      ============================================================ */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="badge-pill bg-blue-100 text-blue-800 border border-blue-200 mb-3">
                Live Opportunities
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Current Job Openings
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl">
                Filter by department, work location, or keywords to discover the right role for your skillset.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search skills, roles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-white rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="space-y-4 mb-10">
            {/* Department Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Department:
              </span>
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedDept === dept
                      ? "bg-blue-700 text-white shadow-md shadow-blue-600/20"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>

            {/* Location Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                Location:
              </span>
              {locations.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    selectedLocation === loc
                      ? "bg-amber-600 text-white shadow-md shadow-amber-600/20"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-8 text-xs text-slate-500 font-medium">
            <span>
              Showing <strong className="text-slate-900">{filteredJobs.length}</strong> matching opening
              {filteredJobs.length !== 1 ? "s" : ""}
            </span>
            {(selectedDept !== "All" || selectedLocation !== "All" || searchQuery !== "") && (
              <button
                onClick={() => {
                  setSelectedDept("All");
                  setSelectedLocation("All");
                  setSearchQuery("");
                }}
                className="text-blue-700 hover:underline font-semibold"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Job Cards Grid */}
          {filteredJobs.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-xl mx-auto shadow-sm">
              <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-heading font-bold text-lg text-slate-800">
                No matching openings found
              </h3>
              <p className="text-slate-600 text-sm mt-1 mb-6">
                Try adjusting your filters or submit a general application below. We frequently open new positions.
              </p>
              <button
                onClick={() => {
                  setSelectedDept("All");
                  setSelectedLocation("All");
                  setSearchQuery("");
                }}
                className="btn-primary py-2.5 px-5 text-xs font-bold"
              >
                View All Openings
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Department & Employment Type */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200">
                        {job.department}
                      </span>
                      <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{job.work_type || "Full-time"}</span>
                      </span>
                    </div>

                    {/* Job Title */}
                    <h3 className="font-heading font-extrabold text-xl text-slate-900 group-hover:text-blue-700 transition-colors">
                      {job.title}
                    </h3>

                    {/* Metadata Pills */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600 mt-2 mb-4">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
                        <span>{job.experience}</span>
                      </div>
                      {job.salary_range && (
                        <div className="flex items-center gap-1 text-emerald-700 font-semibold">
                          <IndianRupee className="w-3.5 h-3.5 text-emerald-600" />
                          <span>{job.salary_range}</span>
                        </div>
                      )}
                    </div>

                    {/* Description snippet */}
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5 line-clamp-3">
                      {job.description}
                    </p>

                    {/* Skill Tags */}
                    {job.skills && job.skills.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {job.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setActiveJobModal(job)}
                      className="text-xs font-bold text-slate-700 hover:text-blue-700 inline-flex items-center gap-1 transition"
                    >
                      <span>Role Details &amp; Requirements</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleApplyClick(job)}
                      className="btn-primary py-2.5 px-4 text-xs font-bold inline-flex items-center gap-1.5"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ============================================================
           HOW OUR HIRING WORKS (4 STAGES)
      ============================================================ */}
      <section className="py-16 md:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="badge-pill bg-amber-100 text-amber-800 border border-amber-200 mb-3">
              Transparent Lifecycle
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Our 4-Stage Candidate Journey
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We respect your time. Zuvan commits to transparent feedback and swift decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-700 text-white font-extrabold text-sm flex items-center justify-center mb-4">
                01
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 mb-1">
                Profile Submission
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit your CV or LinkedIn link. Our talent lead reviews your technical alignment within 24–48 hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-700 text-white font-extrabold text-sm flex items-center justify-center mb-4">
                02
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 mb-1">
                Technical Screening
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                A 30–45 minute peer conversation covering architecture, past production challenges, and practical problem solving.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-700 text-white font-extrabold text-sm flex items-center justify-center mb-4">
                03
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 mb-1">
                Leadership Alignment
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Meet with engagement managers to explore client culture, growth expectations, and project deliverables.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white font-extrabold text-sm flex items-center justify-center mb-4">
                04
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 mb-1">
                Offer &amp; Onboarding
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Competitive compensation package, clear scope documentation, and dedicated HR support from Day 1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           APPLICATION FORM SECTION
      ============================================================ */}
      <section id="application-section" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12">
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="badge-pill bg-blue-100 text-blue-800 border border-blue-200 mb-3">
                Quick Apply
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                Submit Your Candidacy
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm mt-2">
                Apply for an active opening or submit a general resume drop. Applications are delivered directly to our talent acquisition team in Supabase.
              </p>
            </div>

            <form onSubmit={handleSubmitApplication} className="space-y-6">
              {/* Role Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Position of Interest *
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition font-medium"
                >
                  <option value="">General Candidate Pool (All Roles)</option>
                  {jobs.map((job) => (
                    <option key={job.id} value={job.id}>
                      {job.title} — {job.department} ({job.location})
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Varma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. ramesh@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Phone & LinkedIn */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    LinkedIn Profile URL
                  </label>
                  <input
                    type="url"
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedinUrl}
                    onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Resume Link */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Resume Link (Google Drive / Dropbox / Portfolio) *
                </label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <input
                    type="url"
                    required
                    placeholder="https://drive.google.com/file/d/... or personal website link"
                    value={formData.resumeUrl}
                    onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                  />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Ensure link sharing is set to &quot;Anyone with the link can view&quot;.
                </p>
              </div>

              {/* Cover Note */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                  Brief Introduction &amp; Notice Period
                </label>
                <textarea
                  rows={3}
                  placeholder="Share a short note on your current notice period, location preference, or primary tech stack..."
                  value={formData.coverNote}
                  onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gold py-4 text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-amber-600/20"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Application to Supabase...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Strict candidate privacy. Your resume is never shared without consent.</span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ============================================================
           MODAL: JOB DETAILS & REQUIREMENTS
      ============================================================ */}
      {activeJobModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl max-w-2xl w-full my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white relative">
              <button
                onClick={() => setActiveJobModal(null)}
                className="absolute top-6 right-6 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase bg-amber-400 text-amber-950 mb-3">
                {activeJobModal.department}
              </span>

              <h3 className="font-heading font-extrabold text-2xl text-white">
                {activeJobModal.title}
              </h3>

              <div className="flex flex-wrap items-center gap-4 text-xs text-blue-200 mt-3">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-300" />
                  {activeJobModal.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-300" />
                  {activeJobModal.work_type}
                </span>
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3.5 h-3.5 text-amber-300" />
                  {activeJobModal.experience}
                </span>
                {activeJobModal.salary_range && (
                  <span className="flex items-center gap-1 text-amber-300 font-bold">
                    <IndianRupee className="w-3.5 h-3.5" />
                    {activeJobModal.salary_range}
                  </span>
                )}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider mb-2">
                  Role Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeJobModal.description}
                </p>
              </div>

              {activeJobModal.requirements && activeJobModal.requirements.length > 0 && (
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider mb-3">
                    Key Requirements &amp; Qualifications
                  </h4>
                  <ul className="space-y-2">
                    {activeJobModal.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeJobModal.skills && activeJobModal.skills.length > 0 && (
                <div>
                  <h4 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider mb-2">
                    Primary Tech Stack &amp; Skills
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeJobModal.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3">
              <button
                onClick={() => setActiveJobModal(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
              >
                Close
              </button>

              <button
                onClick={() => handleApplyClick(activeJobModal)}
                className="btn-gold py-2.5 px-6 text-xs font-bold inline-flex items-center gap-1.5 shadow-md shadow-amber-600/20"
              >
                <span>Apply for this Position</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
