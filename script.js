// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => nav.classList.toggle('open'));

// Smooth Scroll & Active Link + Reveal
const links = document.querySelectorAll('nav a[href^="#"]');
const sections = document.querySelectorAll('.section, .hero');

const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Reveal
      entry.target.classList.add(
        entry.target.classList.contains('fade-left') ? 'fade-left' :
        entry.target.classList.contains('section-about') ? 'fade-in-up' : 'fade-in-up'
      );
      // Active Link
      const id = entry.target.id;
      links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
    }
  });
}, { threshold: 0.3 });

[...sections, ...sections].forEach(el => obs.observe(el));

// Scroll indicator hides after scroll
const indicator = document.querySelector('.scroll-indicator');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) indicator.style.opacity = '0';
});
