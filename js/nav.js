document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('nav a');
  const sections = document.querySelectorAll('main section');

  function showSection(id) {
    sections.forEach(section => {
      if (section.id === id) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href').replace('#', '');
      showSection(target);
      window.scrollTo(0, 0);
    });
  });

  // Show home by default
  showSection('home');
});
