import { FaFileAlt } from 'react-icons/fa';
import './Publications.css';

export default function Publications() {
  return (
    <section id="publications" className="section publications">
      <div className="section-container">
        <h2 className="section-title">Publications</h2>
        <div className="publication-card">
          <div className="pub-icon">
            <FaFileAlt />
          </div>
          <div className="pub-content">
            <h3 className="pub-title">
              Network Intrusion Detection Using CNN and Ensemble Learning
            </h3>
            <p className="pub-venue">
              2nd IEEE International Conference on Vehicular Technology and
              Transportation Systems (ICVTTS 2025)
            </p>
            <p className="pub-date">Published in IEEE — Presented Sep 19–20, 2025</p>
            <div className="pub-tags">
              <span className="pub-tag">IEEE</span>
              <span className="pub-tag">Deep Learning</span>
              <span className="pub-tag">Cybersecurity</span>
              <span className="pub-tag">CNN</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
