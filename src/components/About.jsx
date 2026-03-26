import './About.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm an Associate AI Engineer at a startup called Foundry, where I build
              compiler pipelines that transform domain semantics into production-ready
              applications — FastAPI backends, React frontends, and everything in between.
            </p>
            <p>
              My day-to-day involves working with AI-powered development tools like Claude Code
              to ship features at startup velocity. I've contributed 106+ commits spanning
              compiler templates, route generation, lifecycle state machines, and validation systems.
            </p>
            <p>
              Before Foundry, I completed a research internship at PES University's cybersecurity
              research center (C-ISFCR), where I built an Intrusion Detection System that became
              a published IEEE paper presented at ICVTTS 2025.
            </p>
            <p>
              I hold a B.Tech in Computer Science with a specialization in Machine Intelligence
              from PES University.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
