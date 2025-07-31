
export const smoothScroll = {
  init() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (!isMobile) return;

    document.addEventListener('click', (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (href === '#' || href === '') return;

      e.preventDefault();
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, { passive: true });

    const originalScroll = window.scrollTo;
    window.scrollTo = function(options) {
      if (typeof options === 'object' && 'behavior' in options && options.behavior === 'smooth') {
        const start = window.pageYOffset;
        const startTime = performance.now();
        const duration = 500;

        const animateScroll = (currentTime) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easeInOutCubic = t => t < 0.5 
            ? 4 * t * t * t 
            : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

          window.scroll(0, start + (options.top - start) * easeInOutCubic(progress));

          if (elapsed < duration) {
            window.requestAnimationFrame(animateScroll);
          }
        };

        window.requestAnimationFrame(animateScroll);
      } else {
        originalScroll.apply(window, arguments);
      }
    };
  }
};
