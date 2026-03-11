/* =============================================
   ALEXANDER MALANAPHY — PORTFOLIO JAVASCRIPT
   ============================================= */

// ---- Navbar scroll state ----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- Timeline scroll reveal ----
const timelineItems = document.querySelectorAll('.timeline-item');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.index * 150;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

timelineItems.forEach(item => revealObserver.observe(item));

// ---- Skill cards stagger on scroll ----
const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const cards = entry.target.querySelectorAll('.skill-card');
      cards.forEach((card, i) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.transition = 'opacity 0.45s, transform 0.45s';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 90);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

const skillsGrid = document.querySelector('.skills-grid');
if (skillsGrid) skillObserver.observe(skillsGrid);

// ---- Contact form submit ----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    btn.textContent = '✓ Message sent!';
    btn.style.background = '#16A34A';
    setTimeout(() => {
      btn.textContent = 'Send Message →';
      btn.style.background = '';
      contactForm.reset();
    }, 3000);
  });
}

// ---- Smooth active nav highlight ----
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--accent)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
