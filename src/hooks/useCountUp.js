import { useState, useEffect } from 'react';

export function useCountUp(target, triggered) {
  const [val, setVal] = useState('');

  useEffect(() => {
    if (!triggered) return;

    const targetStr = String(target);
    const numericMatch = targetStr.match(/[\d.]+/);
    const suffix = targetStr.replace(/[\d.]+/g, '');

    if (!numericMatch) {
      setVal(targetStr);
      return;
    }

    const numeric = parseFloat(numericMatch[0]);
    const isFloat = !Number.isInteger(numeric);
    const DURATION = 1200;
    const STEPS = 60;
    const intervalMs = DURATION / STEPS;
    let step = 0;

    const t = setInterval(() => {
      step++;
      const progress = step / STEPS;
      const current = numeric * progress;

      if (step >= STEPS) {
        setVal((isFloat ? numeric.toFixed(1) : String(numeric)) + suffix);
        clearInterval(t);
      } else {
        setVal((isFloat ? current.toFixed(1) : String(Math.floor(current))) + suffix);
      }
    }, intervalMs);

    return () => clearInterval(t);
  }, [triggered, target]);

  return val;
}
