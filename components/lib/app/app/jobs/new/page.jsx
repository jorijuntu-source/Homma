"use client";
import { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function NewJobPage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  async function createJob(e) {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from("jobs").insert([{ title, description }]);
    setSaving(false);
    if (error) {
      alert("Virhe tallennuksessa: " + error.message);
    } else {
      router.push("/jobs");
    }
  }

  return (
    <div className="card">
      <h1 className="text-2xl font-bold mb-4">Luo uusi homma</h1>
      <form onSubmit={createJob}>
        <div className="field">
          <label>Otsikko</label>
          <input value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Esim. Tiskikoneen asennus" required />
        </div>
        <div className="field">
          <label>Kuvaus</label>
          <textarea rows={6} value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Kerro mitä pitää tehdä..." />
        </div>
        <button className="btn btn-primary" disabled={saving}>{saving ? "Tallennetaan..." : "Julkaise homma"}</button>
      </form>
    </div>
  );
}
