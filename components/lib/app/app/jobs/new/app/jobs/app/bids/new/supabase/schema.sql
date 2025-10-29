-- Homma starter schema (RLS pois päältä kehitystä varten). Ota RLS käyttöön myöhemmin.
create extension if not exists "pgcrypto";

create table if not exists public.jobs (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  created_at timestamptz not null default now()
);

create table if not exists public.bids (
  id uuid primary key default gen_random_uuid(),
  job_id uuid not null references public.jobs(id) on delete cascade,
  name text not null,
  earliest_start_date date,
  message text,
  created_at timestamptz not null default now()
);

-- Kehitystä varten salli kaikki (älä jätä näin tuotantoon)
alter table public.jobs disable row level security;
alter table public.bids disable row level security;
