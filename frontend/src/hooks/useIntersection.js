import { useEffect } from 'react';

/**
 * Runs after each render and observes all matching elements for
 * scroll-reveal animation — adds 'in-view' when they enter the viewport.
 */
export function useIntersection(selector = '.reveal-up, .reveal-h') {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => {
      // Only observe elements not already revealed
      if (!el.classList.contains('in-view')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }); // intentionally no dependency array — runs after every render
}
