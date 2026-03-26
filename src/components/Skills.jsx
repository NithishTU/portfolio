import { FaPython, FaReact, FaDatabase, FaGitAlt, FaRobot, FaBrain } from 'react-icons/fa';
import { SiTypescript, SiFastapi } from 'react-icons/si';
import './Skills.css';

const skillCategories = [
  {
    icon: <FaPython />,
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'SQL'],
  },
  {
    icon: <SiFastapi />,
    title: 'Backend',
    skills: ['FastAPI', 'Pydantic', 'Spring Boot', 'REST API Design'],
  },
  {
    icon: <FaReact />,
    title: 'Frontend',
    skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Streamlit'],
  },
  {
    icon: <FaBrain />,
    title: 'AI / ML',
    skills: ['Deep Learning', 'NLP', 'Reinforcement Learning', 'TensorFlow', 'BERT', 'CNNs'],
  },
  {
    icon: <FaRobot />,
    title: 'AI Tooling & Code Gen',
    skills: ['Claude Code', 'Prompt Engineering', 'LLM Workflows', 'Schema-Driven Codegen'],
  },
  {
    icon: <FaGitAlt />,
    title: 'Tools & Infra',
    skills: ['Git', 'GitHub', 'pnpm', 'uv', 'Just', 'Jupyter', 'Pandas'],
  },
  {
    icon: <FaDatabase />,
    title: 'Databases',
    skills: ['SQL', 'MongoDB', 'Firebase'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i} className="skill-card">
              <div className="skill-icon">{cat.icon}</div>
              <h3 className="skill-category">{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((s, j) => (
                  <span key={j} className="skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
