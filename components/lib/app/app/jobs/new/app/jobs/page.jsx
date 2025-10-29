"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";

export default function JobsListPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("jobs")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) alert("Virhe ladattaessa: " + error.message);
      setJobs(data || []);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p>Ladataan...</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Hommat</h1>
      {jobs.length === 0 && <p>Ei hommia vielä. <a href="/jobs/new">Luo ensimmäinen</a>.</p>}
      <ul className="space-y-3">
        {jobs.map(j => (
          <li key={j.id} className="card">
            <h2 className="text-xl font-semibold">{j.title}</h2>
            {j.description && <p className="mt-1 whitespace-pre-wrap">{j.description}</p>}
            <div className="mt-3">
              <a className="btn" href={`/bids/new?job=${j.id}`}>Nosta käsi pystyyn</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
