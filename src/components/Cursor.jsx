import { useRef, useEffect } from 'react';

export function Cursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const trail = trailRef.current;

    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      setTimeout(() => {
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
      }, 80);
    };
    document.addEventListener('mousemove', onMove);

    const interactives = document.querySelectorAll('a, button, .skill-tag, .project-card');
    const enter = () => { cursor.style.width = '20px'; cursor.style.height = '20px'; cursor.style.opacity = '0.5'; };
    const leave = () => { cursor.style.width = '12px'; cursor.style.height = '12px'; cursor.style.opacity = '1'; };
    interactives.forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor" ref={cursorRef} />
      <div id="cursor-trail" ref={trailRef} />
    </>
  );
}
