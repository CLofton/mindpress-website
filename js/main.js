// MindPress site interactions

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const nav = document.querySelector('.nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 50
      ? 'rgba(234, 242, 255, 0.18)'
      : 'rgba(234, 242, 255, 0.10)';
  });
}

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

function closeMenu() {
  if (!navToggle || !navLinks) return;
  navLinks.classList.remove('active');
  navToggle.setAttribute('aria-expanded', 'false');
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = navLinks.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!navLinks.classList.contains('active')) return;
    if (navLinks.contains(event.target) || navToggle.contains(event.target)) return;
    closeMenu();
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const form = document.getElementById('booking-form');
  const success = document.getElementById('success-message');
  if (!form || !success) return;

  const submitBtn = form.querySelector('button[type="submit"]');
  const data = {
    name: document.getElementById('name')?.value || '',
    email: document.getElementById('email')?.value || '',
    company: document.getElementById('company')?.value || '',
    size: document.getElementById('size')?.value || '',
    departments: document.getElementById('departments')?.value || '',
    submitted_at: new Date().toISOString(),
    source: window.location.href
  };

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
  }

  fetch('https://formsubmit.co/ajax/c.lofton@zollege.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .catch((error) => {
      console.error('Form submission error:', error);
    })
    .finally(() => {
      form.classList.add('is-hidden');
      success.classList.remove('is-hidden');
    });
}

window.handleSubmit = handleSubmit;

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  document.addEventListener('DOMContentLoaded', () => {
    const animated = document.querySelectorAll('.card, .service-card, .method-card, .timeline-item, .quote-panel, .feature-table');
    animated.forEach((element, index) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(16px)';
      element.style.transition = `opacity 420ms ease ${index * 40}ms, transform 420ms ease ${index * 40}ms`;
      observer.observe(element);
    });
  });
}
