import { useRef, useEffect } from 'react';

export function ParticleCanvas() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();
    mouse.current = { x: W / 2, y: H / 2 };

    function Particle() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.4;
      this.vy = (Math.random() - 0.5) * 0.4;
      this.r = Math.random() * 1.5 + 0.5;
    }
    Particle.prototype.update = function () {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > W) this.vx *= -1;
      if (this.y < 0 || this.y > H) this.vy *= -1;
    };

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const handleMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    document.addEventListener('mousemove', handleMove);

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => p.update());
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99,179,237,0.6)'; ctx.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 120) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(99,179,237,${0.12 * (1 - d / 120)})`; ctx.stroke();
          }
        }
        const dm = Math.hypot(p.x - mouse.current.x, p.y - mouse.current.y);
        if (dm < 180) {
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.strokeStyle = `rgba(159,122,234,${0.2 * (1 - dm / 180)})`; ctx.stroke();
        }
      }
      rafRef.current = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef} />;
}
