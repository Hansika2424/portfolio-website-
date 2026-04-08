import { useInView } from '../hooks/useInView';
import { useCountUp } from '../hooks/useCountUp';

export function StatItem({ count, label }) {
  const [ref, visible] = useInView(0.1);
  const val = useCountUp(count, visible);
  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-num">{val}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
