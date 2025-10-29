export default function HomePage() {
  return (
    <div className="space-y-6">
      <section className="card">
        <h1 className="text-2xl font-bold mb-2">Homma – hommat tekijöille</h1>
        <p>Asiakkaat julkaisevat tehtävän ja yritykset ilmoittautuvat tekijöiksi. Aloita luomalla ensimmäinen homma.</p>
        <div className="mt-4">
          <a className="btn btn-primary" href="/jobs/new">Luo homma</a>
          <a className="btn ml-2" href="/jobs">Selaa hommia</a>
        </div>
      </section>
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">Miten se toimii?</h2>
        <ol className="list-decimal ml-6 space-y-1">
          <li>Asiakas julkaisee homman (otsikko & kuvaus riittää aluksi).</li>
          <li>Tekijät nostavat käden pystyyn, kertovat aikaisimman aloitusajan ja viestin.</li>
          <li>Asiakas valitsee tekijän ja sopii työn.</li>
        </ol>
      </section>
    </div>
  );
}
