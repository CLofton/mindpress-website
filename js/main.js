// MindPress site interactions

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const nav = document.querySelector(".nav");
if (nav) {
  window.addEventListener("scroll", () => {
    nav.style.borderBottomColor = window.scrollY > 50
      ? "rgba(234, 242, 255, 0.18)"
      : "rgba(234, 242, 255, 0.10)";
  });
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
  if (!navToggle || !navLinks) return;
  navLinks.classList.remove("active");
  navToggle.setAttribute("aria-expanded", "false");
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", (event) => {
    event.stopPropagation();
    const isOpen = navLinks.classList.toggle("active");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!navLinks.classList.contains("active")) return;
    if (navLinks.contains(event.target) || navToggle.contains(event.target)) return;
    closeMenu();
  });
}

function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const card = form.closest(".form-card") || form.parentElement;
  const success = card.querySelector(".success-panel");
  const submitBtn = form.querySelector('button[type="submit"]');
  let err = card.querySelector(".form-error");
  if (!err) {
    err = document.createElement("p");
    err.className = "form-error";
    err.style.color = "#ff7a90";
    err.style.marginTop = "0.75rem";
    form.appendChild(err);
  }
  err.textContent = "";

  const defaultLabel = submitBtn ? submitBtn.textContent : "";
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
  }

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: { Accept: "application/json" }
  })
    .then(async (response) => {
      if (!response.ok) {
        throw new Error("send_failed");
      }
      // FormSubmit returns JSON when Accept: application/json
      try {
        const data = await response.json();
        if (data && data.success === false) throw new Error("send_failed");
      } catch (e) {
        if (e.message === "send_failed") throw e;
        // non-JSON ok response still counts as success
      }
      form.classList.add("is-hidden");
      if (success) success.classList.remove("is-hidden");
    })
    .catch(() => {
      err.textContent = "Could not send. Email hello.mindpress@agentmail.to or try again.";
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = defaultLabel || "Send last week’s inquiries";
      }
    });
}

window.handleSubmit = handleSubmit;

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
      observer.unobserve(entry.target);
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  document.addEventListener("DOMContentLoaded", () => {
    const animated = document.querySelectorAll(".card, .service-card, .method-card, .timeline-item, .quote-panel, .feature-table");
    animated.forEach((element, index) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(16px)";
      element.style.transition = `opacity 420ms ease ${index * 40}ms, transform 420ms ease ${index * 40}ms`;
      observer.observe(element);
    });
  });
}
