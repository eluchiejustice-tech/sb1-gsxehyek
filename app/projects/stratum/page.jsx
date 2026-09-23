import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata={title:"Stratum",description:"Stratum is a solid-minerals marketplace and mineral intelligence project by Chibuzo Eluchie."};

export default function Stratum(){
  return <main className="inner-page"><SiteHeader/><section className="section"><div className="container split"><div><p className="eyebrow">Project 02 · Product development</p><h1 className="page-title">Stratum</h1></div><div className="prose"><p>Stratum is technology for the solid-minerals ecosystem, combining marketplace infrastructure with mineral intelligence.</p><p>The project is focused on making mineral opportunities, participants and information easier to discover and work with.</p><p>It is being developed as a practical technology product rather than simply a marketplace interface.</p><div className="actions"><Link className="button" href="/projects">Back to projects</Link></div></div></div></section><SiteFooter/></main>
}
