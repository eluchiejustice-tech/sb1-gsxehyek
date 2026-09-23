import Link from "next/link";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata={title:"GeoMind",description:"GeoMind is an AI-assisted geoscience and mining intelligence project by Chibuzo Eluchie."};

export default function GeoMind(){
  return <main className="inner-page"><SiteHeader/><section className="section"><div className="container split"><div><p className="eyebrow">Project 01 · Actively developing</p><h1 className="page-title">GeoMind</h1></div><div className="prose"><p>GeoMind is an AI-assisted intelligence platform for geoscience and mining.</p><p>The project explores how evidence, provenance, geological information, spatial data and artificial intelligence can work together to help people understand complex geoscience information.</p><p>Its guiding principle is simple: AI assists. People decide.</p><div className="actions"><Link className="button" href="/projects">Back to projects</Link></div></div></div></section><SiteFooter/></main>
}
