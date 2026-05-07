document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('site-nav');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('#site-nav a');

  const mqMobile = window.matchMedia('(max-width: 768px)');

  function isMobileNav() {
    return mqMobile.matches;
  }

  function setMenuOpen(open) {
    if (!navToggle || !nav) return;
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    nav.classList.toggle('is-open', open);
    document.documentElement.classList.toggle('nav-menu-open', open);
    document.body.classList.toggle('nav-menu-open', open);
  }

  function closeMobileMenu() {
    setMenuOpen(false);
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      const next = navToggle.getAttribute('aria-expanded') !== 'true';
      setMenuOpen(next);
    });
  }

  mqMobile.addEventListener('change', function () {
    if (!isMobileNav()) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav && nav.classList.contains('is-open')) {
      closeMobileMenu();
      if (navToggle) navToggle.focus();
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (isMobileNav()) {
        closeMobileMenu();
      }
    });
  });
});
