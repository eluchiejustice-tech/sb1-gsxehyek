import Link from "next/link";

export default function SiteHeader(){
  return <header className="container nav">
    <Link className="brand" href="/">Chibuzo Eluchie</Link>
    <nav className="nav-links" aria-label="Primary navigation">
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/#portfolio">Portfolio</Link>
      <Link href="/insights">Insights</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  </header>;
}
