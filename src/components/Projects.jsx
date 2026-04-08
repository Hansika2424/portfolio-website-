import { AnimatedEl } from './AnimatedEl';

const PROJECTS = [
  {
    icon: '🤖',
    name: 'Scribiq',
    desc: 'AI-assisted full-stack note-taking app with CRUD ops, multi-role support, and Gemini-powered content generation.',
    highlights: [
      <><strong>3 user roles</strong> with a RESTful API handling <strong>15+ endpoints</strong></>,
      <>Reduced note drafting time by <strong>~40%</strong> via Gemini 2.0 Flash integration</>,
      <>Rate limiting via <strong>Upstash Redis</strong> to prevent API abuse</>,
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Upstash Redis', 'Gemini API'],
  },
  {
    icon: '🔍',
    name: 'CodeWise',
    desc: 'AI-powered code review tool that analyzes submissions for bugs and optimizations using Gemini LLM.',
    highlights: [
      <>Cut manual review time by <strong>35%</strong> in internal testing</>,
      <>Authored <strong>50+ prompt templates</strong> reaching <strong>99% accuracy</strong> on 100+ samples</>,
      <>Returns structured feedback with exact bug locations and fix recommendations</>,
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Gemini API', 'Tailwind CSS'],
  },
  {
    icon: '💸',
    name: 'TrackIt',
    desc: 'Real-time expense tracker with sub-second Firebase Firestore sync, Google OAuth, and 150+ test cases.',
    highlights: [
      <>Tracks <strong>50+ transaction categories</strong> with real-time Firestore sync</>,
      <>Improved DB read performance by <strong>40%</strong> via Firestore restructuring</>,
      <><strong>99% defect-free</strong> across 150+ automated test cases</>,
    ],
    stack: ['React.js', 'Firebase', 'Tailwind CSS', 'Google OAuth'],
  },
];

export function Projects() {
  return (
    <section id="projects">
      <div className="section-tag">Projects</div>
      <h2 className="section-title">Things I've Built</h2>
      <div className="projects-grid">
        {PROJECTS.map((proj, i) => (
          <AnimatedEl key={proj.name} className="project-card" delay={i * 0.08}>
            <div className="project-top">
              <div className="project-icon">{proj.icon}</div>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="project-link">GitHub ↗</a>
            </div>
            <div className="project-name">{proj.name}</div>
            <p className="project-desc">{proj.desc}</p>
            <ul className="project-highlights">
              {proj.highlights.map((h, j) => <li key={j}>{h}</li>)}
            </ul>
            <div className="project-stack">
              {proj.stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
            </div>
          </AnimatedEl>
        ))}
      </div>
      <p className="projects-more">
        You can find the rest on{' '}
        <a href="https://github.com/Hansika2424/" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </p>
    </section>
  );
}
