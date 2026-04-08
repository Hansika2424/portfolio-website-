import { AnimatedEl } from './AnimatedEl';

export function Achievements() {
  return (
    <section>
      <div className="section-tag">Achievements & Certifications</div>
      <h2 className="section-title">Recognition</h2>

      <AnimatedEl className="achieve-row" delay={0}>
        <div className="achieve-icon">🏆</div>
        <div className="achieve-text">
          <h3>TCS CodeVita Season 12</h3>
          <p>Ranked <strong>4,386 out of 537,000+</strong> global participants. Qualified for Round 2 — top <strong>1.3%</strong> worldwide.</p>
        </div>
        <div className="achieve-badge">
          <span className="badge-num">Top 1.3%</span>
          <span className="badge-sub">537K+ participants</span>
        </div>
      </AnimatedEl>

      <AnimatedEl className="achieve-row" delay={0.1}>
        <div className="achieve-icon">📜</div>
        <div className="achieve-text">
          <h3>Oracle Certified AI Foundations Associate</h3>
          <p>Certified by Oracle in AI Foundations — Sept 2025.</p>
        </div>
        <div className="achieve-badge">
          <span className="badge-num">Oracle</span>
          <span className="badge-sub">AI Certified</span>
        </div>
      </AnimatedEl>
    </section>
  );
}
