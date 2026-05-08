// MindPress — Main JS

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Nav background on scroll
const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.borderBottomColor = 'rgba(30, 30, 46, 0.8)';
    } else {
      nav.style.borderBottomColor = 'rgba(22, 22, 37, 1)';
    }
  });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'rgba(10, 10, 15, 0.98)';
    navLinks.style.padding = '24px';
    navLinks.style.gap = '16px';
    navLinks.style.borderBottom = '1px solid var(--border)';
  });
}

// Booking form handler
function handleSubmit(e) {
  e.preventDefault();
  const form = document.getElementById('booking-form');
  const success = document.getElementById('success-message');
  if (form && success) {
    form.style.display = 'none';
    success.style.display = 'block';
  }
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Apply fade-in to cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.step-card, .capability-card, .pricing-card, .case-study-card, .team-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
    observer.observe(card);
  });
});
