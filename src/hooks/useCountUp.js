import { useEffect, useRef, useState } from 'react';

export default function useCountUp(target, { duration = 1400, enabled = true } = {}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!enabled || target == null || isNaN(target)) return;
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered.current) {
            triggered.current = true;
            const start = performance.now();
            const tick = (now) => {
              const elapsed = now - start;
              const progress = Math.min(elapsed / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(target * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, enabled]);

  return [value, ref];
}
