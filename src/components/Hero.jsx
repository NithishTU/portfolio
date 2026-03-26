import { Link } from 'react-scroll';
import { FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Nithish TU</h1>
        <h2 className="hero-title">
          <span className="gradient-text">AI Engineer</span> &amp; Full-Stack Developer
        </h2>
        <p className="hero-description">
          I build production systems using AI-augmented workflows — from compiler
          pipelines and FastAPI backends to React frontends. Published IEEE researcher.
        </p>
        <div className="hero-cta">
          <Link to="contact" smooth duration={500} className="btn btn-primary">
            Get in Touch
          </Link>
          <a href="/Nithish_Ubaru_Resume.pdf" className="btn btn-outline" target="_blank">
            <FaDownload /> Resume
          </a>
        </div>
        <div className="hero-socials">
          <a href="https://linkedin.com/in/nithish-ubaru-00a964263" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:nithishu15@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <Link to="about" smooth duration={500}>
          <div className="scroll-mouse">
            <div className="scroll-dot" />
          </div>
        </Link>
      </div>
    </section>
  );
}
