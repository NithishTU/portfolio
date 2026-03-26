import './Experience.css';

const experiences = [
  {
    title: 'Associate AI Engineer',
    company: 'Foundry ERP (Startup)',
    period: 'Oct 2025 – Present',
    description: 'Building a compiler pipeline that transforms domain semantics into production-ready applications.',
    highlights: [
      'Built compiler pipeline generating FastAPI routes, Pydantic models, and React frontends from JSON semantics',
      'Engineered 7 compiler reference deltas — lifecycle state machines, action guards, composed conditions, validation codegen',
      'Designed ActionGuard pattern for cross-entity business rule enforcement at the route level',
      'Implemented CameraCapture flow pattern — end-to-end compiler machinery for visual inspection workflows',
      'Shipped 106+ commits with consistent PR-based workflow and code review',
    ],
    tech: ['Python', 'FastAPI', 'Pydantic', 'React', 'TypeScript', 'Claude Code'],
  },
  {
    title: 'Research Intern',
    company: 'C-ISFCR, PES University',
    period: 'Jan 2025 – May 2025',
    description: 'Cybersecurity research at the Centre for Information Security, Forensics and Cyber Resilience.',
    highlights: [
      'Built a Network Intrusion Detection System using CNN and ensemble learning on CICIDS 2017 dataset',
      'Co-authored IEEE paper presented at ICVTTS 2025 — 2nd IEEE International Conference on Vehicular Technology',
    ],
    tech: ['Python', 'TensorFlow', 'CNN', 'Ensemble Learning', 'CICIDS 2017'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-title">{exp.title}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <span className="exp-period">{exp.period}</span>
                </div>
                <p className="exp-description">{exp.description}</p>
                <ul className="exp-highlights">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
                <div className="exp-tech">
                  {exp.tech.map((t, j) => (
                    <span key={j} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
