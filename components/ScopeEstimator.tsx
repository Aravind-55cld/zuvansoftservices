"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock, ShieldCheck, Sparkles, ArrowRight, Calculator } from "lucide-react";

export default function ScopeEstimator() {
  const [service, setService] = useState<"staffing" | "consulting" | "recruitment">("staffing");
  const [urgency, setUrgency] = useState<"standard" | "immediate">("standard");
  const [scope, setScope] = useState<"individual" | "team" | "enterprise">("team");

  // Dynamic estimate calculations
  let timelineText = "2 to 4 Business Days";
  let slaText = "24-hour response & role alignment call";
  let recText = "Pre-vetted engineering cohort with structured technical interviews.";

  if (service === "consulting") {
    timelineText = urgency === "immediate" ? "Within 48 Hours" : "3 to 5 Business Days";
    slaText = "Dedicated Senior Technology Advisor Assigned";
    recText =
      scope === "enterprise"
        ? "Full architectural assessment, cloud infrastructure audit & milestone roadmap."
        : "Targeted tech stack review, code health assessment, and next-step action plan.";
  } else if (service === "staffing") {
    timelineText = urgency === "immediate" ? "24 to 48 Hours" : "3 to 5 Days";
    slaText = "Curated 3–5 profile shortlist within 72 hours";
    recText =
      scope === "individual"
        ? "Dedicated specialist deployed on flexible contract or contract-to-hire terms."
        : "Pod-based technical staffing team with coordinated onboarding and delivery assurance.";
  } else if (service === "recruitment") {
    timelineText = "5 to 7 Business Days";
    slaText = "Candidate intake clarity workshop & custom scoring rubric";
    recText =
      "End-to-end recruitment pipeline: sourcing, pre-screening, interview coordination, and offer closing.";
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
        <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200/60 flex items-center justify-center text-amber-600">
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900">
            Interactive Scope &amp; Timeline Estimator
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Configure your technical or talent requirement to see estimated mobilization timelines.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls */}
        <div className="lg:col-span-6 space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-heading">
              1. Service Practice
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "staffing", label: "Staffing" },
                { id: "consulting", label: "Consulting" },
                { id: "recruitment", label: "Recruitment" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setService(item.id as any)}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border ${
                    service === item.id
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-heading">
              2. Timeline Urgency
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "standard", label: "Standard (Planned)" },
                { id: "immediate", label: "High Urgency (Immediate)" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setUrgency(item.id as any)}
                  className={`py-3 px-3 rounded-xl text-xs font-bold transition-all border ${
                    urgency === item.id
                      ? "bg-amber-500 text-white border-amber-500 shadow-md shadow-amber-500/20"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 font-heading">
              3. Scope &amp; Scale
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "individual", label: "1–2 Roles" },
                { id: "team", label: "Pod (3–8)" },
                { id: "enterprise", label: "Enterprise (9+)" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setScope(item.id as any)}
                  className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border ${
                    scope === item.id
                      ? "bg-slate-900 text-white border-slate-900 shadow-md"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Card */}
        <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-7 shadow-lg flex flex-col justify-between h-full border border-slate-800">
          <div className="space-y-5">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 font-heading">
                Estimated Delivery Metrics
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700">
                Live Calculation
              </span>
            </div>

            {/* Timeline */}
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-1">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Estimated Mobilization</span>
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {timelineText}
              </div>
            </div>

            {/* SLA */}
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-1">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Service Level Agreement</span>
              </div>
              <div className="text-sm font-semibold text-slate-200">{slaText}</div>
            </div>

            {/* Recommendation */}
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mb-1">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Recommended Engagement</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed bg-slate-800/60 p-3 rounded-xl border border-slate-800">
                {recText}
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-slate-800">
            <Link
              href="/contact"
              className="btn-gold w-full text-xs sm:text-sm py-3 justify-center"
            >
              <span>Initiate This Scope</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

