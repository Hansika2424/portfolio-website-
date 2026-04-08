import './index.css';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <>
      <ParticleCanvas />
      <Cursor />
      <div className="orb orb1" />
      <div className="orb orb2" />
      <div className="orb orb3" />
      <div className="page">
        <Navbar />
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
        <footer>
          <span>© 2025 Hansika Srivastava</span>
          <span style={{ color: 'var(--border)' }}>// designed with intention</span>
          <span>VIT Bhopal · CSE · CGPA 8.40</span>
        </footer>
      </div>
    </>
  );
}
