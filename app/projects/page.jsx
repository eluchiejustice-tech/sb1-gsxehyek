import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const projects=[
  ["GeoMind","AI-powered geoscience and mining intelligence.","Actively developing","/projects/geomind"],
  ["Stratum","Technology for the solid-minerals ecosystem, combining marketplace infrastructure with mineral intelligence.","Product development","/projects/stratum"],
  ["NIN Intelligence","A community-focused prototype exploring structured household information, identification, safety communication and coordination.","Prototype / paused","/projects/nin-intelligence"]
];
export const metadata={title:"Projects",description:"Selected projects by Chibuzo Eluchie across geoscience, AI, data and technology."};
export default function Projects(){return <main className="inner-page"><SiteHeader/><section className="section"><div className="container"><p className="eyebrow">Projects</p><h1 className="page-title">Things I am building, testing and learning from.</h1><div className="project-list">{projects.map(([name,description,status,href],i)=><Link className="project-row" href={href} key={name}><span className="project-number">0{i+1}</span><div><h2>{name}</h2><p>{description}</p></div><span className="status">{status}</span></Link>)}</div></div></section><SiteFooter/></main>}
