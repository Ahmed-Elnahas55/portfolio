// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks   = document.getElementById('nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    const icon = menuToggle.querySelector('i');
    if (navLinks.classList.contains('active')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Close menu when clicking any link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });
}
// Theme Toggle (Dark ↔ Light)
const themeToggleBtns = [
  document.getElementById('theme-toggle-mobile'),
  document.getElementById('theme-toggle-desktop')
].filter(btn => btn !== null);

const savedTheme = localStorage.getItem('theme') || 'dark-theme';

function applyTheme(theme) {
  document.body.classList.remove('dark-theme', 'light-theme');
  document.body.classList.add(theme);
  
  const icon = theme === 'light-theme' ? 'fa-sun' : 'fa-moon';
  
  themeToggleBtns.forEach(btn => {
    btn.innerHTML = `<i class="fas ${icon}"></i>`;
  });
  
  localStorage.setItem('theme', theme);
}

applyTheme(savedTheme);

themeToggleBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const current = document.body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    const next = current === 'dark-theme' ? 'light-theme' : 'dark-theme';
    applyTheme(next);
  });
});
// Scroll Reveal Effect
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const visiblePoint = 150;

    if (revealTop < windowHeight - visiblePoint) {
      reveal.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});
backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});