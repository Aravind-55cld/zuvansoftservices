import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Cpu,
  Users,
  Search,
  Server,
  Cloud,
  Code2,
  Zap,
  Globe,
  Layers,
  Laptop,
  TrendingUp,
  BarChart3,
  Megaphone,
  Target,
  GraduationCap,
  Award,
  BookOpen,
  Briefcase,
  ShieldCheck,
  Clock,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | IT Consulting, Web Development, Digital Marketing, Certifications & Staffing | Zuvan Softsol",
  description:
    "Explore Zuvan Software Services: IT Consulting, Web Development, Digital Marketing, Certifications, Contract Projects, Technical Staffing, and Direct Recruitment across India.",
};

export default function ServicesPage() {
  const serviceDirectory = [
    { id: "it-consulting", number: "01", name: "IT Consulting", color: "blue" },
    { id: "staffing", number: "02", name: "Staffing Solutions", color: "amber" },
    { id: "recruitment", number: "03", name: "Direct Recruitment", color: "purple" },
    { id: "web-development", number: "04", name: "Web Development", color: "emerald" },
    { id: "digital-marketing", number: "05", name: "Digital Marketing", color: "rose" },
    { id: "certifications", number: "06", name: "Certifications & Training", color: "indigo" },
    { id: "contract-projects", number: "07", name: "Contract Projects", color: "amber" },
  ];

  return (
    <div className="flex flex-col">
      {/* ============================================================
           PAGE HERO
      ============================================================ */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white pt-20 pb-20 md:pt-24 md:pb-28 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-amber-300 font-semibold">Services</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Enterprise Solutions &amp; Workforce Services</span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-tight max-w-4xl mb-6">
            Complete Technology &amp; Talent Solutions.{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-500 bg-clip-text text-transparent">
              Engineered For Scalable Growth.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-10">
            From architecture consulting and full-stack web engineering to ROI-driven digital marketing, workforce certifications, and milestone-backed contract projects &mdash; Zuvan Softsol delivers end-to-end capabilities tailored to Indian and global businesses.
          </p>

          {/* Quick Jump Bar */}
          <div className="pt-6 border-t border-white/10">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 font-heading">
              Quick Navigation by Service:
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceDirectory.map((srv) => (
                <a
                  key={srv.id}
                  href={`#${srv.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-slate-200 hover:text-white transition-all backdrop-blur-sm"
                >
                  <span className="text-amber-300 font-bold">{srv.number}</span>
                  <span>{srv.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SERVICE 01: IT CONSULTING
      ============================================================ */}
      <section id="it-consulting" className="py-20 md:py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider font-heading">
                01 | IT Consulting
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Technology guidance aligned with your business objectives.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                We work with clients to evaluate technology challenges, audit existing systems, review architectural patterns, and plan practical next steps. Our consulting model is grounded in measurable business value, not just technology novelty.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Whether you&apos;re initiating a digital transformation, modernizing legacy systems, evaluating cloud options, or selecting enterprise vendors, Zuvan Softsol provides structured, objective advisory tailored to your operating constraints.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/it-consulting" className="btn-primary">
                  <span>Full IT Consulting Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-4 shadow-sm">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Tech Assessment</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive code audits, architecture reviews, and technical feasibility reports.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-4 shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Digital Transformation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pragmatic roadmaps to replace paper or legacy workflows with modern digital tools.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-4 shadow-sm">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Software Strategy</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Technology stack selection, modular microservices design, and API governance.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100">
                <div className="w-10 h-10 rounded-xl bg-white text-blue-700 flex items-center justify-center mb-4 shadow-sm">
                  <Cloud className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Cloud &amp; Infrastructure</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  AWS, Azure, and Google Cloud migration strategies, cost optimization, and resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SERVICE 02: STAFFING SOLUTIONS
      ============================================================ */}
      <section id="staffing" className="py-20 md:py-24 bg-slate-50/70 border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Cards first on desktop */}
            <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                <div className="w-10 h-10 rounded-xl bg-white text-amber-700 flex items-center justify-center mb-4 shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">IT &amp; Technical Staffing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Engineers, full-stack developers, cloud architects, and QA specialists ready to plug into your team.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Contract &amp; C2H</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Flexible contract and contract-to-hire staffing models that reduce overhead and onboarding friction.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Rigorous Screening</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every candidate undergoes strict technical evaluation and reference verification before submission.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                <div className="w-10 h-10 rounded-xl bg-white text-amber-700 flex items-center justify-center mb-4 shadow-sm">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Pipeline Coordination</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Dedicated account manager handling interview logistics, scheduling, and onboarding paperwork.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider font-heading">
                02 | Staffing Solutions
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Workforce support for changing business requirements.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                We help organisations scale their engineering and product capacity with vetted talent. Based on the exact skills, tech stack, duration, and ramp-up timeline you need, we source and present top-tier candidates within days.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                From individual specialist backfills to entire cross-functional delivery pods, our staffing solutions provide the flexibility you need without long-term hiring commitments.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/staffing" className="btn-gold">
                  <span>Full Staffing Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-secondary">
                  <span>Request Candidate Profiles</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SERVICE 03: DIRECT RECRUITMENT
      ============================================================ */}
      <section id="recruitment" className="py-20 md:py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-purple-50 border border-purple-200 text-purple-700 text-xs font-bold uppercase tracking-wider font-heading">
                03 | Direct Recruitment
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Structured support to identify suitable permanent candidates.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                We work directly with hiring managers and HR teams to define role parameters, target candidate profiles, and coordinate the complete recruitment cycle. Our search process is milestone-driven, thorough, and highly confidential.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                From senior tech leads and architects to specialized domain managers, we tap into extensive talent networks to secure high-retention hires for your long-term success.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/recruitment" className="btn-secondary">
                  <span>Full Recruitment Page</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="btn-primary">
                  <span>Discuss Open Roles</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100">
                <div className="w-10 h-10 rounded-xl bg-white text-purple-700 flex items-center justify-center mb-4 shadow-sm">
                  <Search className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Requirement Intake</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Deep-dive workshops to calibrate role technical depth, culture fit, and compensation bands.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-purple-700 flex items-center justify-center mb-4 shadow-sm">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Targeted Headhunting</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Active outreach to passive candidates across Indian tech hubs and global talent pools.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-purple-700 flex items-center justify-center mb-4 shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Interview Logistics</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Seamless candidate scheduling, pre-briefings, and debrief feedback loops for your hiring team.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-purple-50/60 border border-purple-100">
                <div className="w-10 h-10 rounded-xl bg-white text-purple-700 flex items-center justify-center mb-4 shadow-sm">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Offer &amp; Closing</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Competitive negotiation support and notice-period engagement to minimize dropouts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SERVICE 04: WEB DEVELOPMENT & ENGINEERING
      ============================================================ */}
      <section id="web-development" className="py-20 md:py-24 bg-slate-50/70 border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Cards first on desktop */}
            <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/60">
                <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 flex items-center justify-center mb-4 shadow-sm">
                  <Laptop className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Modern Web Applications</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  High-speed React, Next.js, and TypeScript frontends with responsive, mobile-first design.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 shadow-sm">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Backend &amp; API Systems</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Resilient REST &amp; GraphQL microservices built with Node.js, Python, or Go with robust database layers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 shadow-sm">
                  <Layers className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Enterprise Portals &amp; SaaS</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Multi-tenant B2B platforms, customer dashboards, workflow automation, and custom CMS solutions.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/60">
                <div className="w-10 h-10 rounded-xl bg-white text-emerald-700 flex items-center justify-center mb-4 shadow-sm">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Speed, SEO &amp; Security</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Optimal Core Web Vitals, enterprise SSL/TLS security, automated testing, and CI/CD pipelines.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider font-heading">
                04 | Web Development
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Custom full-stack web applications and digital platforms.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                We architect and build modern, high-performance web applications tailored to your business processes. Whether you need a customer-facing digital product, a high-converting corporate portal, or a complex enterprise dashboard, our engineering squad delivers clean code and exceptional user experience.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                From initial Figma design translation to cloud infrastructure deployment, we ensure your web presence is scalable, secure, and ready for high transaction volumes.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact" className="btn-primary">
                  <span>Start a Web Project</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/how-we-work" className="btn-secondary">
                  <span>See How We Build</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SERVICE 05: DIGITAL MARKETING & PERFORMANCE
      ============================================================ */}
      <section id="digital-marketing" className="py-20 md:py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider font-heading">
                05 | Digital Marketing
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Data-driven marketing and performance campaigns that drive ROI.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Accelerate customer acquisition and brand visibility with our targeted digital marketing solutions. We combine technical SEO, precision paid media advertising (PPC), B2B lead generation funnels, and content strategies that translate into measurable pipeline growth.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our approach is deeply quantitative: we track every rupee spent against conversions, customer acquisition cost (CAC), and pipeline value, ensuring maximum return on your marketing investment.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact" className="btn-primary">
                  <span>Request Marketing Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:040-27898999" className="btn-secondary">
                  <span>Speak with Strategist</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
                <div className="w-10 h-10 rounded-xl bg-white text-rose-700 flex items-center justify-center mb-4 shadow-sm">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Search Engine Optimization (SEO)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Technical SEO audits, keyword targeting, high-authority backlink building, and local SEO rankings.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-rose-700 flex items-center justify-center mb-4 shadow-sm">
                  <Megaphone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Paid Ads (Google &amp; Meta)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Laser-focused PPC search campaigns, display ads, and LinkedIn B2B targeting with strict budget controls.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-rose-700 flex items-center justify-center mb-4 shadow-sm">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">B2B Lead Generation</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Inbound lead funnels, gated content assets, automated email nurture sequences, and CRM integration.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
                <div className="w-10 h-10 rounded-xl bg-white text-rose-700 flex items-center justify-center mb-4 shadow-sm">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Analytics &amp; CRO</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conversion Rate Optimization, GA4 instrumentation, user heatmaps, and custom attribution dashboards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SERVICE 06: CERTIFICATIONS & CORPORATE TRAINING
      ============================================================ */}
      <section id="certifications" className="py-20 md:py-24 bg-slate-50/70 border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Cards first on desktop */}
            <div className="lg:col-span-6 order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-200/60">
                <div className="w-10 h-10 rounded-xl bg-white text-indigo-700 flex items-center justify-center mb-4 shadow-sm">
                  <Cloud className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Cloud Certifications</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Targeted tracks for AWS Certified Solutions Architect, Azure Administrator / Fundamentals, and GCP.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4 shadow-sm">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">DevOps &amp; Security</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Docker, Kubernetes (CKA), Terraform, CI/CD pipeline automation, and DevSecOps best practices.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center mb-4 shadow-sm">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Full-Stack Developer Tracks</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Intensive upskilling in React, Next.js, Java Spring Boot, Python, and microservice architectures.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-200/60">
                <div className="w-10 h-10 rounded-xl bg-white text-indigo-700 flex items-center justify-center mb-4 shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Corporate Training Batches</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Custom curriculum, lab environments, mock exams, and progress reporting tailored for enterprise teams.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider font-heading">
                06 | Certifications &amp; Corporate Training
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Industry-recognized certifications and corporate workforce upskilling.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Bridge the technical skills gap and elevate your engineering capabilities with our structured certification programs. We partner with enterprises, growing tech companies, and individual professionals to deliver practical, lab-based training led by certified industry veterans.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                From fresh graduate induction bootcamps to advanced cloud and architectural certifications, our curriculum is aligned with current enterprise technology standards and real-world implementation demands.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact" className="btn-primary">
                  <span>Inquire for Corporate Batches</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/why-zuvan" className="btn-secondary">
                  <span>Why Train With Zuvan</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           SERVICE 07: CONTRACT PROJECTS & TURNKEY SOLUTIONS
      ============================================================ */}
      <section id="contract-projects" className="py-20 md:py-24 bg-white border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block px-3 py-1 rounded-md bg-amber-50 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider font-heading">
                07 | Contract Projects &amp; Turnkey Delivery
              </span>
              <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                Milestone-driven contract projects with guaranteed SLA accountability.
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                When you have a well-defined product vision, migration deadline, or custom software build that needs turnkey execution, our contract project model provides end-to-end accountability under a transparent Statement of Work (SOW).
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                We take ownership of discovery, sprint planning, software engineering, quality assurance, and deployment. You get predictable delivery milestones, weekly progress demos, strict IP protection, and complete documentation upon handover.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact" className="btn-gold">
                  <span>Submit Project Scope</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/how-we-work" className="btn-secondary">
                  <span>Our 5-Step Project Flow</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                <div className="w-10 h-10 rounded-xl bg-white text-amber-700 flex items-center justify-center mb-4 shadow-sm">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Turnkey Software Builds</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  End-to-end product delivery from requirement analysis to production release and warranty support.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-amber-700 flex items-center justify-center mb-4 shadow-sm">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Milestone SOW Delivery</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Transparent milestone payments tied to completed sprints, verified deliverables, and QA signoffs.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="w-10 h-10 rounded-xl bg-white text-amber-700 flex items-center justify-center mb-4 shadow-sm">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">Dedicated Squad Pods</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Pre-assembled squads featuring a Technical Project Manager, Full-Stack Devs, and QA Engineers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-200/60">
                <div className="w-10 h-10 rounded-xl bg-white text-amber-700 flex items-center justify-center mb-4 shadow-sm">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-sm text-slate-900 mb-1">SLA &amp; IP Protection</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Strict non-disclosure agreements, 100% intellectual property transfer, and comprehensive documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           CLOSING CTA
      ============================================================ */}
      <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
            Get In Touch
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-white mb-4">
            Ready to Accelerate Your Business?
          </h2>
          <p className="text-slate-300 text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Share your project requirements, staffing needs, or training objectives with Zuvan Software Services Pvt. Ltd. and our technical leadership will connect with you within 24 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">
              <span>Share Your Requirement</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="tel:040-27898999" className="btn-hero-outline">
              <span>Call Us: 040-27898999</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
