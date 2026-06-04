import { useEffect } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-fade-up, .img-overlay-wipe');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });
}
