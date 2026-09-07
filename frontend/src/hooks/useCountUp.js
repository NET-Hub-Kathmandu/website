import { useState, useEffect, useRef } from 'react';

export function useCountUp(targetNumber = 0, duration = 1400) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setCount(targetNumber);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let start = null;

            function step(timestamp) {
              if (!start) start = timestamp;
              const progress = Math.min((timestamp - start) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3); // cubic ease-out
              setCount(Math.round(eased * targetNumber));

              if (progress < 1) {
                requestAnimationFrame(step);
              }
            }

            requestAnimationFrame(step);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [targetNumber, duration]);

  return { count, elementRef };
}
