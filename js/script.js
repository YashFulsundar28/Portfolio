/* =========================================================
   YASH FULSUNDAR — PORTFOLIO SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* -----------------------------------------------------
     0. EDIT ME: GitHub profile URL
     Replace the placeholder below with your real GitHub
     profile URL. Every GitHub button/link on the page
     reads from this single value.
  ----------------------------------------------------- */
  const GITHUB_URL = "https://github.com/YashFulsundar28"; // <-- replace with your GitHub URL

  document.querySelectorAll("[data-github-link]").forEach((el) => {
    el.setAttribute("href", GITHUB_URL);
  });
  document.querySelectorAll("[data-github-text]").forEach((el) => {
    // Show the friendly handle instead of a raw placeholder once set.
    try {
      const url = new URL(GITHUB_URL);
      el.textContent = url.hostname + url.pathname.replace(/\/$/, "");
    } catch {
      el.textContent = GITHUB_URL;
    }
  });

  /* -----------------------------------------------------
     1. Sticky nav background on scroll
  ----------------------------------------------------- */
  const nav = document.getElementById("siteNav");
  const onScroll = () => {
    nav.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* -----------------------------------------------------
     2. Mobile menu toggle
  ----------------------------------------------------- */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open menu");
    });
  });

  /* -----------------------------------------------------
     3. Active nav link tracking via IntersectionObserver
  ----------------------------------------------------- */
  const sections = document.querySelectorAll("main > section, main");
  const navAnchors = document.querySelectorAll("[data-nav]");

  const setActive = (id) => {
    navAnchors.forEach((a) => {
      a.classList.toggle("is-active", a.getAttribute("href") === `#${id}`);
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  document.querySelectorAll("section[id], #home").forEach((sec) => {
    sectionObserver.observe(sec);
  });

  /* -----------------------------------------------------
     4. Reveal-on-scroll animations
  ----------------------------------------------------- */
  const revealTargets = document.querySelectorAll("[data-reveal]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // small stagger for sibling groups
            setTimeout(() => entry.target.classList.add("is-visible"), i * 40);
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach((el) => revealObserver.observe(el));
  }

  /* -----------------------------------------------------
     5. Contact form — mailto handoff (no backend)
  ----------------------------------------------------- */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("cf-name").value.trim();
      const email = document.getElementById("cf-email").value.trim();
      const message = document.getElementById("cf-message").value.trim();

      const subject = encodeURIComponent(`Portfolio contact from ${name}`);
      const body = encodeURIComponent(
        `${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
      );

      window.location.href = `mailto:yashfulsundar12@gmail.com?subject=${subject}&body=${body}`;
    });
  }

});
