-- ============================================================
-- Zuvan Software Services - Supabase Database Schema
-- Copy and paste this script into your Supabase SQL Editor and click RUN.
-- ============================================================

-- 1. Create Jobs Table
create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  department text not null,               -- Engineering, IT Consulting, Talent Acquisition, Sales, etc.
  location text not null,                 -- Hyderabad, Bengaluru, Remote, etc.
  work_type text default 'Full-time',      -- Full-time, Hybrid, Contract, Remote
  experience text not null,               -- e.g. '3-5 Years'
  salary_range text,                      -- e.g. '₹12 - 18 LPA' or 'Competitive'
  description text not null,
  requirements text[] default '{}',       -- Array of job requirement bullet points
  skills text[] default '{}',             -- Array of skill tags (React, Next.js, Node.js, etc.)
  is_active boolean default true,         -- Visible on /jobs when true
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. Create Job Applications Table
create table if not exists public.job_applications (
  id uuid primary key default gen_random_uuid(),
  job_id uuid references public.jobs(id) on delete set null,
  full_name text not null,
  email text not null,
  phone text not null,
  linkedin_url text,
  resume_url text not null,               -- Google Drive link, portfolio, or resume file URL
  cover_note text,
  status text default 'New',              -- 'New', 'Reviewed', 'Shortlisted', 'Rejected'
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Enable Row-Level Security (RLS)
alter table public.jobs enable row level security;
alter table public.job_applications enable row level security;

-- Drop existing policies if re-running
drop policy if exists "Public can view active jobs" on public.jobs;
drop policy if exists "Admin has full access to jobs" on public.jobs;
drop policy if exists "Public can insert applications" on public.job_applications;
drop policy if exists "Admin can view applications" on public.job_applications;
drop policy if exists "Admin can update applications" on public.job_applications;
drop policy if exists "Admin can delete applications" on public.job_applications;

-- 4. Public Policies (Allows prospective candidates to browse and apply)
create policy "Public can view active jobs"
  on public.jobs for select
  using (is_active = true);

create policy "Public can insert applications"
  on public.job_applications for insert
  with check (true);

-- 5. Authenticated Admin Policies (Allows the logged-in admin to manage everything)
create policy "Admin has full access to jobs"
  on public.jobs for all
  using (auth.role() = 'authenticated');

create policy "Admin can view applications"
  on public.job_applications for select
  using (auth.role() = 'authenticated');

create policy "Admin can update applications"
  on public.job_applications for update
  using (auth.role() = 'authenticated');

create policy "Admin can delete applications"
  on public.job_applications for delete
  using (auth.role() = 'authenticated');

-- 6. Insert Starter Seed Jobs (Optional)
insert into public.jobs (title, department, location, work_type, experience, salary_range, description, requirements, skills, is_active)
values
  (
    'Senior Full-Stack Engineer (Next.js & Node.js)',
    'Engineering',
    'Hyderabad / Hybrid',
    'Full-time',
    '4-7 Years',
    '₹18 - 28 LPA',
    'Architect and scale client-facing enterprise web applications using Next.js, TypeScript, PostgreSQL and modern cloud services. Work directly with enterprise stakeholders and technical leadership.',
    array[
      'Extensive experience with React, Next.js (App Router), TypeScript and Tailwind CSS',
      'Robust Node.js microservices / REST / GraphQL backend development experience',
      'Deep understanding of SQL (PostgreSQL), schema design, indexing, and connection pooling',
      'Experience with CI/CD pipelines, Docker, and AWS / Azure cloud architectures'
    ],
    array['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Docker'],
    true
  ),
  (
    'Technical Recruitment Specialist (IT & SaaS)',
    'Talent Acquisition',
    'Hyderabad / Onsite',
    'Full-time',
    '3-5 Years',
    '₹7 - 12 LPA + Incentives',
    'Drive full-cycle technical recruiting across specialized IT niches (Cloud, DevOps, Data & Full-Stack). Partner with hiring managers to build talent pipelines and meet strict SLA timelines.',
    array[
      'Proven track record sourcing high-caliber software engineering and tech leadership talent',
      'Expertise with modern ATS tools, LinkedIn Recruiter, GitHub, and Boolean search strings',
      'Strong candidate evaluation skills with domain understanding of contemporary tech stacks',
      'Demonstrated ability to close contract and full-time technical roles within tight deadlines'
    ],
    array['Tech Recruiting', 'LinkedIn Recruiter', 'ATS', 'Candidate Sourcing', 'Talent Mapping'],
    true
  ),
  (
    'Cloud & DevOps Infrastructure Consultant',
    'IT Consulting',
    'Bengaluru / Hybrid',
    'Full-time',
    '5-8 Years',
    '₹22 - 32 LPA',
    'Advise enterprise clients on multi-cloud infrastructure modernization, Kubernetes container orchestration, automated CI/CD pipelines, and high-availability enterprise environments.',
    array[
      'Hands-on production expertise with AWS / Azure / GCP and Kubernetes (EKS / AKS)',
      'Strong Infrastructure-as-Code (Terraform, Ansible, CloudFormation)',
      'Deep understanding of security compliance, zero-trust network design, and observability (Prometheus/Grafana)',
      'Client-facing consultative mindset with excellent presentation and communication skills'
    ],
    array['AWS', 'Kubernetes', 'Terraform', 'CI/CD', 'Docker', 'DevOps'],
    true
  ),
  (
    'IT Account Executive & Client Partner',
    'Sales & Accounts',
    'Pan-India / Remote',
    'Full-time',
    '3-6 Years',
    '₹10 - 18 LPA + High Commission',
    'Manage strategic enterprise client relationships, identify staffing and consulting opportunities, negotiate enterprise Master Services Agreements (MSAs), and drive revenue growth.',
    array[
      'Experience selling IT staffing, technology consulting, or software professional services in India',
      'Strong enterprise network across CIOs, CTOs, VP HRs, and Talent Acquisition leaders',
      'Exceptional contract negotiation, pipeline management, and client retention capabilities',
      'Self-driven, numbers-oriented mindset with a consultative client-first attitude'
    ],
    array['B2B Sales', 'Client Partnerships', 'IT Staffing Sales', 'Account Management', 'MSA Negotiation'],
    true
  );

