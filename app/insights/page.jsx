import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

const posts=[
  ["Lessons from Building GeoMind","What building an AI geoscience product reveals about evidence, data, security and failure.","/insights/lessons-from-building-geomind"],
  ["The Geology of Intelligence","Exploring evidence, uncertainty and interpretation through a geological lens.","/insights/the-geology-of-intelligence"],
  ["Building from Africa","Notes on developing practical technology around local problems and constraints.","/insights/building-from-africa"],
  ["From Geologist to Technology Builder","How a geology background became part of the way I approach technology, data and problem-solving.","/insights/from-geologist-to-technology-builder"]
];

export const metadata={title:"Insights",description:"Writing by Chibuzo Eluchie about geology, AI, data and building technology."};

export default function Insights(){
  return <main className="inner-page"><SiteHeader/><section className="section"><div className="container"><p className="eyebrow">Insights</p><h1 className="page-title">Writing about geology, AI, data and building.</h1><div className="grid">{posts.map(([title,description,href],i)=><Link className="card insight-card" href={href} key={title}><p className="card-index">0{i+1}</p><h2>{title}</h2><p>{description}</p><span className="project-link">Read article →</span></Link>)}</div></div></section><SiteFooter/></main>
}