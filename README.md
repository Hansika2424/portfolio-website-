# Hansika Srivastava — Portfolio

Personal portfolio website built with React. Shows my projects, experience, skills, and contact info.



---

## Tech Stack

- **React 18** (Create React App)
- **Vanilla CSS** with CSS custom properties — no UI framework
- Custom hooks for typed text animation, scroll-triggered visibility, and count-up numbers
- Canvas-based particle background with mouse interaction
- No external animation libraries

## Project Structure

```
src/
├── hooks/
│   ├── useTyped.js        # Typewriter effect
│   ├── useInView.js       # Intersection Observer wrapper
│   └── useCountUp.js      # Animated number counter
├── components/
│   ├── Navbar.jsx         # Responsive nav with mobile hamburger
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Achievements.jsx
│   ├── Contact.jsx
│   ├── ParticleCanvas.jsx # Animated canvas background
│   ├── Cursor.jsx         # Custom cursor (desktop only)
│   ├── AnimatedEl.jsx     # Scroll-triggered fade-in wrapper
│   └── StatItem.jsx       # Animated stat counter
├── App.jsx
└── index.css
```

## Running Locally

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

## Building for Production

```bash
npm run build
```

Output goes to the `build/` folder, ready to deploy anywhere — Vercel, Netlify, GitHub Pages, etc.

## Deployment (Vercel — recommended)

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Framework preset: **Create React App**
4. Deploy — done

## What I'd Do Differently

This is a v1. A few honest notes on what could be improved:

- The contact form doesn't actually send emails yet — it needs EmailJS or a backend endpoint hooked up
- Everything lives in `index.css` (one big file) — splitting into per-component CSS modules would be cleaner at scale
- No testing set up

---

**Hansika Srivastava** · [GitHub](https://github.com/Hansika2424) · [LinkedIn](https://linkedin.com/in/) · hansikasrivastava24@gmail.com
