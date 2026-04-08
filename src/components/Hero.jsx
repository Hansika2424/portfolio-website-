import { useTyped } from '../hooks/useTyped';
import { StatItem } from './StatItem';

export function Hero() {
  const typedText = useTyped();

  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <div className="hero-tag">Software Developer · Full Stack Developer · B.Tech CSE</div>
        <h1>
          <span className="glitch" data-text="Hansika">Hansika</span>
          <br />
          <span className="line2">Srivastava</span>
        </h1>
        <p className="hero-desc">
          Building high-performance web apps with the MERN stack, Next.js, and AI integrations.
          Passionate about clean architecture, pixel-perfect UIs, and shipping things that matter.{' '}
          <span>{typedText}</span>
          <span className="typed-cursor" />
        </p>
        <div className="hero-links">
          <a href="mailto:hansikasrivastava24@gmail.com" className="btn btn-primary">→ Get in touch</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub ↗</a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn ↗</a>
        </div>
        <div className="hero-stats">
          <StatItem count="6+" label="Projects" />
          <StatItem count={2} label="Internships" />
          <StatItem count={8.4} label="CGPA (x10)" />
        </div>
      </div>
    </section>
  );
}
