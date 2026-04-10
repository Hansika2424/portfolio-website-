import { AnimatedEl } from './AnimatedEl';

export function Experience() {
  return (
    <section id="experience">
      <div className="section-tag">Work Experience</div>
      <h2 className="section-title">Where I've Worked</h2>
      <div className="exp-list">

        <AnimatedEl className="exp-item" delay={0}>
          <div className="exp-meta">
            <div className="exp-date">Jul 2025 – Sep 2025</div>
            <div className="exp-company">Twwios Technologies</div>
            <div className="exp-role">Technical Intern</div>
            <span className="exp-type">Remote</span>
          </div>
          <div className="exp-content">
            <ul className="exp-bullets">
              <li>Developed <strong>10+ production-ready UI screens</strong> using Next.js and React.js, devloping and translating Figma designs into responsive components with <strong>95% pixel accuracy</strong>.</li>
              <li>Reduced data-fetching latency by <strong>30%</strong> and eliminated <strong>80% of CLS</strong> by integrating REST APIs with SWR for client-side caching.</li>
              <li>Created a reusable component library that cut average sprint delivery time by <strong>30%</strong> on subsequent releases.</li>
            </ul>
          </div>
        </AnimatedEl>

        <AnimatedEl className="exp-item" delay={0.1}>
          <div className="exp-meta">
            <div className="exp-date">Dec 2024 – Jan 2025</div>
            <div className="exp-company">Edunet × EY GDS</div>
            <div className="exp-role">Web Development Intern</div>
            <span className="exp-type">Remote</span>
          </div>
          <div className="exp-content">
            <ul className="exp-bullets">
              <li>Selected for competitive internship co-organized with EY GDS; sole developer on a full-stack app delivered in <strong>6 weeks</strong>.</li>
              <li>Architected a MERN-stack news aggregator serving <strong>5+ categories</strong> via NewsAPI with a Node.js proxy securing API credentials server-side.</li>
              <li>Validated all <strong>10+ API endpoints</strong> with Postman; delivered responsive UI across <strong>3 screen breakpoints</strong>.</li>
            </ul>
          </div>
        </AnimatedEl>

      </div>
    </section>
  );
}
