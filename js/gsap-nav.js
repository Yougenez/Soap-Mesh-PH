
window.addEventListener('DOMContentLoaded', () => {
  gsap.from('.logo', { duration: 1, y: -50, opacity: 0, ease: 'bounce' });
  gsap.from('.nav-links a', {
    duration: 1,
    y: -20,
    opacity: 0,
    stagger: 0.2,
    delay: 0.3,
    ease: 'power2.out'
  });
});
