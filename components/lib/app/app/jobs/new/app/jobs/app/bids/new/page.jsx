"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";

export default function NewBidPage() {
  const params = useSearchParams();
  const jobId = params.get("job");
  const [name, setName] = useState("");
  const [earliest, setEarliest] = useState("");
  const [message, setMessage] = useState("");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function submit(e) {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from("bids").insert([{
      job_id: jobId,
      name,
      earliest_start_date: earliest || null,
      message
    }]);
    setSaving(false);
    if (error) alert("Virhe tallennuksessa: " + error.message);
    else {
      alert("Ilmoittautuminen lähetetty!");
      router.push("/jobs");
    }
  }

  if (!jobId) return <p>Puuttuva job-parametri.</p>;

  return (
    <div className="card">
      <h1 className="text-2xl font-bold mb-4">Nosta käsi pystyyn</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label>Yrityksen nimi / tekijän nimi</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} required />
        </div>
        <div className="field">
          <label>Aikaisin aloitus (valinnainen)</label>
          <input type="date" value={earliest} onChange={(e)=>setEarliest(e.target.value)} />
        </div>
        <div className="field">
          <label>Viesti asiakkaalle</label>
          <textarea rows={5} value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Lyhyt kuvaus, hinta-arvio jne." />
        </div>
        <button className="btn btn-primary" disabled={saving}>{saving ? "Lähetetään..." : "Lähetä"}</button>
      </form>
    </div>
  );
}
