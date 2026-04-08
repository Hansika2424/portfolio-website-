import { useInView } from '../hooks/useInView';

export function AnimatedEl({ className, children, delay = 0 }) {
  const [ref, visible] = useInView(0.12);
  return (
    <div
      ref={ref}
      className={`${className}${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
