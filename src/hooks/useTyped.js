import { useState, useEffect, useRef } from 'react';

const PHRASES = [
  'Software Developer.',
  'MERN Stack Developer.',
  'Next.js Enthusiast.',
  'AI Integrations Builder.',
  'Clean Code Advocate.',
];

export function useTyped() {
  const [text, setText] = useState('');
  const stateRef = useRef({ pi: 0, ci: 0, deleting: false });
  const timerRef = useRef(null);

  useEffect(() => {
    function tick() {
      const s = stateRef.current;
      const phrase = PHRASES[s.pi];
      if (!s.deleting) {
        s.ci++;
        setText(phrase.slice(0, s.ci));
        if (s.ci === phrase.length) {
          s.deleting = true;
          timerRef.current = setTimeout(tick, 1800);
          return;
        }
      } else {
        s.ci--;
        setText(phrase.slice(0, s.ci));
        if (s.ci === 0) {
          s.deleting = false;
          s.pi = (s.pi + 1) % PHRASES.length;
        }
      }
      timerRef.current = setTimeout(tick, s.deleting ? 40 : 70);
    }
    timerRef.current = setTimeout(tick, 1000);
    return () => clearTimeout(timerRef.current);
  }, []);

  return text;
}
