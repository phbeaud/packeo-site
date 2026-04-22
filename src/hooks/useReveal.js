import { useEffect } from 'react';

export default function useReveal(deps = []) {
  useEffect(() => {
    // Slight delay so newly mounted DOM is queryable
    const id = requestAnimationFrame(() => {
      const elements = document.querySelectorAll('.reveal:not(.is-visible)');
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );

      elements.forEach((el) => observer.observe(el));
      // Cleanup on next call
      window.__revealObserver?.disconnect();
      window.__revealObserver = observer;
    });
    return () => cancelAnimationFrame(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
