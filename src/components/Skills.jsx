import { AnimatedEl } from './AnimatedEl';

const SKILLS = [
  {
    cat: 'Languages',
    tags: ['C++', 'JavaScript ES6+', 'TypeScript', 'Python', 'HTML', 'CSS', 'SQL'],
  },
  {
    cat: 'Frameworks & Libraries',
    tags: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'SWR', 'Axios'],
  },
  {
    cat: 'Databases',
    tags: ['MongoDB', 'Firebase Firestore'],
  },
  {
    cat: 'Tools & Platforms',
    tags: ['Git / GitHub', 'Postman', 'Upstash Redis', 'Firebase (GCP)', 'AWS', 'Gemini API'],
  },
];

export function Skills() {
  return (
    <section id="skills">
      <div className="section-tag">Technical Skills</div>
      <h2 className="section-title">What I Work With</h2>
      <div className="skills-grid">
        {SKILLS.map((card, i) => (
          <AnimatedEl key={card.cat} className="skill-card" delay={i * 0.08}>
            <div className="skill-category">{card.cat}</div>
            <div className="skill-tags">
              {card.tags.map(t => <span key={t} className="skill-tag">{t}</span>)}
            </div>
          </AnimatedEl>
        ))}
      </div>
    </section>
  );
}
