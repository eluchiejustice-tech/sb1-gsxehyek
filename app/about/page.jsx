import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata={title:"About",description:"About Chibuzo Eluchie, a geologist building at the intersection of science, data and technology."};

export default function About(){return <main className="inner-page"><SiteHeader/><section className="section"><div className="container split"><div><p className="eyebrow">About</p><h1 className="page-title">A geologist building at the intersection of science and technology.</h1></div><div className="prose"><p>My foundation is in geology, and my current work extends into artificial intelligence, data analysis and software products.</p><p>I am interested in using technology to make complex information more understandable, useful and actionable—especially in areas where domain knowledge matters.</p><p>My approach is practical: learn, build, test, document what works and improve what does not.</p></div></div></section><SiteFooter/></main>}