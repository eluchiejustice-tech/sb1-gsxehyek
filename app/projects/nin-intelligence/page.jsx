import Link from "next/link";
import SiteHeader from "../../../components/SiteHeader";
import SiteFooter from "../../../components/SiteFooter";

export const metadata={title:"NIN Intelligence",description:"NIN Intelligence is a paused prototype exploring structured household information and community coordination."};

export default function NINIntelligence(){
  return <main className="inner-page"><SiteHeader/><section className="section"><div className="container split"><div><p className="eyebrow">Project 03 · Prototype / paused</p><h1 className="page-title">NIN Intelligence</h1></div><div className="prose"><p>NIN Intelligence is a prototype exploring structured household information, identification, safety communication and community coordination.</p><p>The project is currently paused while other products receive priority.</p><div className="actions"><Link className="button" href="/projects">Back to projects</Link></div></div></div></section><SiteFooter/></main>
}
