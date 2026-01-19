/* =============================================
   RETRO PORTFOLIO - MAIN JAVASCRIPT
   Handles theme toggle and animations
   ============================================= */

// === THEME TOGGLE ===
// Toggles between light and dark mode, persisting preference in localStorage

(function initTheme() {
  // Check for saved theme preference or default to light
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Apply theme: saved preference > system preference > light (default)
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.classList.add('dark');
  }
})();

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// === INTERSECTION OBSERVER FOR ANIMATIONS ===
// Fade in elements as they scroll into view

function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for older browsers
    animatedElements.forEach(el => el.classList.add('animated'));
  }
}

// === TYPEWRITER EFFECT ===
// Optional: Add typewriter effect to hero subtitle

function typewriterEffect(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// === INITIALIZE ON DOM READY ===
document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
  
  // Optional: Initialize typewriter effect on hero subtitle
  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle && heroSubtitle.dataset.typewriter) {
    typewriterEffect(heroSubtitle, heroSubtitle.dataset.typewriter);
  }
});

// === CURRENT YEAR FOR FOOTER ===
// Updates the year in the footer copyright

document.addEventListener('DOMContentLoaded', function() {
  const yearElements = document.querySelectorAll('.current-year');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => el.textContent = currentYear);
});
