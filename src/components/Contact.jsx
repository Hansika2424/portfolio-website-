import { useState } from 'react';

export function Contact() {
  const [formSuccess, setFormSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormSuccess(false), 4000);
  };

  return (
    <section id="contact">
      <div className="section-tag">Contact</div>
      <div className="contact-grid">
        <div className="contact-info">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>
            Let's Build<br />Something<br />
            <span style={{ color: 'var(--accent)' }}>Together.</span>
          </h2>
          <p>Open to internships, full-time roles, and freelance collaborations. Feel free to reach out — I'm always up for a good conversation about tech!</p>
          <div className="contact-links">
            <a href="mailto:hansikasrivastava24@gmail.com" className="contact-link">
              <span className="contact-link-icon">✉</span>
              hansikasrivastava24@gmail.com
            </a>
            <a href="tel:+918707880288" className="contact-link">
              <span className="contact-link-icon">📞</span>
              +91 8707880288
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon">💼</span>
              LinkedIn Profile ↗
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-link-icon">⌥</span>
              GitHub Profile ↗
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Jane Doe"
              value={formData.name}
              onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-input"
              placeholder="jane@example.com"
              value={formData.email}
              onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
            />
          </div>
          <div className="form-group">
            <label className="form-label">Message</label>
            <textarea
              className="form-textarea"
              placeholder="Hey Hansika, I'd like to..."
              value={formData.message}
              onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            → Send Message
          </button>
          {formSuccess && (
            <div className="form-success">✓ Message sent! I'll get back to you soon.</div>
          )}
        </form>
      </div>
    </section>
  );
}
