import { FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
  {
    title: 'Foundry Compiler',
    subtitle: 'AI-Driven ERP Code Generator',
    description:
      'Multi-stage compiler that reads domain semantics and position manifests to generate complete FastAPI backends and React frontends. Features QueryContract support with filters, joins, sorting, and a LinearLifecycle engine for state-machine transitions.',
    tech: ['Python', 'Pydantic', 'FastAPI', 'React', 'Jinja2'],
    featured: true,
  },
  {
    title: 'Intrusion Detection System',
    subtitle: 'IEEE Published Research',
    description:
      'Network intrusion detection system using CNN and ensemble learning on the CICIDS 2017 dataset, classifying multiple attack types in real-time network traffic. Published as an IEEE paper at ICVTTS 2025.',
    tech: ['Python', 'CNN', 'Ensemble Learning', 'CICIDS 2017'],
    featured: true,
  },
  {
    title: 'Sentiment Analysis',
    subtitle: 'Hybrid Deep Learning Model',
    description:
      'Hybrid architecture combining BERT embeddings with LSTM and CNN layers for multi-class emotion classification with improved accuracy over standalone models.',
    tech: ['Python', 'BERT', 'LSTM', 'CNN', 'TensorFlow'],
  },
  {
    title: 'Image Caption Generator',
    subtitle: 'Computer Vision + NLP',
    description:
      'Automatic image captioning system using InceptionV3 for feature extraction and LSTM decoder for natural language caption generation.',
    tech: ['Python', 'InceptionV3', 'TensorFlow', 'NLP'],
  },
  {
    title: 'Mars Rover Simulation',
    subtitle: 'Reinforcement Learning',
    description:
      'Deep-Q-Network agent for autonomous Mars rover navigation, optimizing path planning in simulated terrain environments.',
    tech: ['Python', 'Deep Q-Network', 'OpenAI Gym'],
  },
  {
    title: 'Sports Facility Management',
    subtitle: 'Full-Stack Web App',
    description:
      'Full-stack booking and management system with role-based access control, scheduling, and facility tracking.',
    tech: ['Java', 'Spring Boot', 'MySQL', 'HTML/CSS'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, i) => (
            <div key={i} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-header">
                <div className="project-folder">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                {project.featured && <span className="featured-badge">Featured</span>}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((t, j) => (
                  <span key={j}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
