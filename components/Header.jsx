export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="container py-4 flex items-center justify-between">
        <div className="text-xl font-bold">Homma</div>
        <nav className="flex gap-3">
          <a href="/" className="btn">Etusivu</a>
          <a href="/jobs" className="btn">Hommat</a>
          <a href="/jobs/new" className="btn btn-primary">Luo homma</a>
        </nav>
      </div>
    </header>
  );
}
