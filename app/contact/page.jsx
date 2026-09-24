import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata={
  title:"Contact",
  description:"Contact Chibuzo Eluchie about technology, AI, data, geoscience, collaboration and opportunities."
};

export default function Contact(){
  return <main className="inner-page">
    <SiteHeader/>
    <section className="cta">
      <div className="container">
        <p className="eyebrow">Contact</p>
        <h1>Let’s build something useful.</h1>
        <p>If you have a technology problem worth understanding, a system worth building, an idea worth exploring, or an opportunity where my background in geology, AI and data can contribute, I’d be glad to hear from you.</p>
        <div className="card">
          <p className="eyebrow">Reach me</p>
          <h2>Email</h2>
          <p><a href="mailto:chibuzojeluchie@gmail.com">chibuzojeluchie@gmail.com</a></p>
          <h2>LinkedIn</h2>
          <p><a href="https://www.linkedin.com/in/chibuzo-eluchie-6156b488" target="_blank" rel="noopener noreferrer">Connect with me on LinkedIn ↗</a></p>
          <h2>GitHub</h2>
          <p><a href="https://github.com/eluchiejustice-tech" target="_blank" rel="noopener noreferrer">Explore my technical work on GitHub ↗</a></p>
          <div className="actions">
            <a className="button" href="mailto:chibuzojeluchie@gmail.com">Send me an email</a>
          </div>
        </div>
      </div>
    </section>
    <SiteFooter/>
  </main>;
}