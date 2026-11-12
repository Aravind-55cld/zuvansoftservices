import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://ezxqgvacpeewtxmkeuse.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6eHFndmFjcGVld3R4bWtldXNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ0Nzc4NDAsImV4cCI6MjExMDA1Mzg0MH0.vAKU4NtjALSpmyE08wtB8GpyceVsoILep7uf0iD4pWM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  work_type: string;
  experience: string;
  salary_range?: string;
  description: string;
  requirements: string[];
  skills: string[];
  is_active: boolean;
  created_at?: string;
}

export interface JobApplication {
  id?: string;
  job_id: string;
  full_name: string;
  email: string;
  phone: string;
  linkedin_url?: string;
  resume_url: string;
  cover_note?: string;
  status?: string;
  created_at?: string;
}

export const FALLBACK_JOBS: Job[] = [
  {
    id: "job-001",
    title: "Senior Full-Stack Engineer (Next.js & Node.js)",
    department: "Engineering",
    location: "Hyderabad / Hybrid",
    work_type: "Full-time",
    experience: "4-7 Years",
    salary_range: "₹18 - 28 LPA",
    description:
      "Architect and scale client-facing enterprise web applications using Next.js, TypeScript, PostgreSQL and modern cloud services. Work directly with enterprise stakeholders and technical leadership.",
    requirements: [
      "Extensive experience with React, Next.js (App Router), TypeScript and Tailwind CSS",
      "Robust Node.js microservices / REST / GraphQL backend development experience",
      "Deep understanding of SQL (PostgreSQL), schema design, indexing, and connection pooling",
      "Experience with CI/CD pipelines, Docker, and AWS / Azure cloud architectures",
    ],
    skills: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS", "Docker"],
    is_active: true,
  },
  {
    id: "job-002",
    title: "Technical Recruitment Specialist (IT & SaaS)",
    department: "Talent Acquisition",
    location: "Hyderabad / Onsite",
    work_type: "Full-time",
    experience: "3-5 Years",
    salary_range: "₹7 - 12 LPA + Incentives",
    description:
      "Drive full-cycle technical recruiting across specialized IT niches (Cloud, DevOps, Data & Full-Stack). Partner with hiring managers to build talent pipelines and meet strict SLA timelines.",
    requirements: [
      "Proven track record sourcing high-caliber software engineering and tech leadership talent",
      "Expertise with modern ATS tools, LinkedIn Recruiter, GitHub, and Boolean search strings",
      "Strong candidate evaluation skills with domain understanding of contemporary tech stacks",
      "Demonstrated ability to close contract and full-time technical roles within tight deadlines",
    ],
    skills: ["Tech Recruiting", "LinkedIn Recruiter", "ATS", "Candidate Sourcing", "Talent Mapping"],
    is_active: true,
  },
  {
    id: "job-003",
    title: "Cloud & DevOps Infrastructure Consultant",
    department: "IT Consulting",
    location: "Bengaluru / Hybrid",
    work_type: "Full-time",
    experience: "5-8 Years",
    salary_range: "₹22 - 32 LPA",
    description:
      "Advise enterprise clients on multi-cloud infrastructure modernization, Kubernetes container orchestration, automated CI/CD pipelines, and high-availability enterprise environments.",
    requirements: [
      "Hands-on production expertise with AWS / Azure / GCP and Kubernetes (EKS / AKS)",
      "Strong Infrastructure-as-Code (Terraform, Ansible, CloudFormation)",
      "Deep understanding of security compliance, zero-trust network design, and observability (Prometheus/Grafana)",
      "Client-facing consultative mindset with excellent presentation and communication skills",
    ],
    skills: ["AWS", "Kubernetes", "Terraform", "CI/CD", "Docker", "DevOps"],
    is_active: true,
  },
  {
    id: "job-004",
    title: "IT Account Executive & Client Partner",
    department: "Sales & Accounts",
    location: "Pan-India / Remote",
    work_type: "Full-time",
    experience: "3-6 Years",
    salary_range: "₹10 - 18 LPA + High Commission",
    description:
      "Manage strategic enterprise client relationships, identify staffing and consulting opportunities, negotiate enterprise Master Services Agreements (MSAs), and drive revenue growth.",
    requirements: [
      "Experience selling IT staffing, technology consulting, or software professional services in India",
      "Strong enterprise network across CIOs, CTOs, VP HRs, and Talent Acquisition leaders",
      "Exceptional contract negotiation, pipeline management, and client retention capabilities",
      "Self-driven, numbers-oriented mindset with a consultative client-first attitude",
    ],
    skills: ["B2B Sales", "Client Partnerships", "IT Staffing Sales", "Account Management", "MSA Negotiation"],
    is_active: true,
  },
];

