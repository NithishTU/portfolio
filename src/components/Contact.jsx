import { FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="contact-subtitle">
          I'm currently open to new opportunities. Whether you have a question
          or just want to say hi, feel free to reach out!
        </p>
        <div className="contact-cards">
          <a href="mailto:nithishu15@gmail.com" className="contact-card">
            <FaEnvelope className="contact-icon" />
            <span className="contact-label">Email</span>
            <span className="contact-value">nithishu15@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/nithish-ubaru-00a964263"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <FaLinkedin className="contact-icon" />
            <span className="contact-label">LinkedIn</span>
            <span className="contact-value">nithish-ubaru</span>
          </a>
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <span className="contact-label">Location</span>
            <span className="contact-value">Bangalore, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
