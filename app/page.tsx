import Link from "next/link";

export default function Home() {
  return (
    <main className="home-page">
      <div className="home-card">
        <h1>Welcome to List Demo</h1>
        <p>Build a quick task list with a polished dark UI and responsive controls.</p>
        <Link href="/list-page" className="home-link">
          Open Task Manager
        </Link>
      </div>
    </main>
  );
}