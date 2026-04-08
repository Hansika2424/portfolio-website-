import { useState, useEffect } from 'react';

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className={scrolled ? 'nav-scrolled' : ''}>
      <div className="nav-logo">H<span>ansika</span></div>

      {/* Desktop links */}
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Hamburger button */}
      <button
        className={`nav-hamburger${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="nav-mobile-overlay" onClick={() => setMenuOpen(false)}>
          <ul className="nav-mobile-links" onClick={e => e.stopPropagation()}>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
            <li><a href="#experience" onClick={handleNavClick}>Experience</a></li>
            <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
