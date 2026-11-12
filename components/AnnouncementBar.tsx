import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white text-xs font-medium py-2.5 px-4 border-b border-blue-800/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-center">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 border border-white/20 text-[10px] font-bold uppercase tracking-wider text-amber-300">
          <span className="pulse-dot"></span>
          Pan-India Partner
        </span>
        <span className="text-slate-200">
          Empowering enterprises with client-focused IT Consulting, Specialized Staffing &amp; Executive Recruitment
        </span>
        <Link
          href="/contact"
          className="inline-flex items-center gap-1 text-amber-300 hover:text-white font-bold underline underline-offset-4 transition-colors"
        >
          <span>Start a Conversation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

