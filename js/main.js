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
      nav.style.borderBottomColor = 'rgba(30, 32, 36, 0.8)';
    } else {
      nav.style.borderBottomColor = 'rgba(22, 24, 25, 1)';
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
    navLinks.style.background = 'rgba(5, 6, 7, 0.98)';
    navLinks.style.padding = '24px';
    navLinks.style.gap = '16px';
    navLinks.style.borderBottom = '1px solid var(--border)';
  });
}

// Form handler — Formspree AJAX
function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const formId = form.id;
  const successEl = document.getElementById('success-message');
  const data = new FormData(form);
  const action = form.getAttribute('action');

  // Warn if placeholder ID is still present
  if (action && action.includes('YOUR_ID')) {
    console.warn('[MindPress] Formspree YOUR_ID placeholder detected. Replace before launch.');
    // Still show success panel for dev/testing
    if (successEl) {
      form.style.display = 'none';
      successEl.style.display = 'block';
    }
    return;
  }

  fetch(action, {
    method: 'POST',
    body: data,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      if (successEl) {
        form.style.display = 'none';
        successEl.style.display = 'block';
      }
    } else {
      response.json().then(d => {
        console.error('[MindPress] Formspree error:', d);
        alert('Something went wrong. Please email hello@mindpress.ai directly.');
      });
    }
  })
  .catch(error => {
    console.error('[MindPress] Network error:', error);
    alert('Network error. Please email hello@mindpress.ai directly.');
  });
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
  const cards = document.querySelectorAll('.service-card, .method-card, .pricing-card, .trust-card, .principle-card, .fit-card, .service-detail-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`;
    observer.observe(card);
  });
});
