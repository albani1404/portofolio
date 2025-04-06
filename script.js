// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.background = 'rgba(30, 58, 138, 1)';
  } else {
    navbar.style.background = 'rgba(30, 58, 138, 0.9)';
  }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
  darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
});

// Load Dark Mode Preference
window.addEventListener('DOMContentLoaded', () => {
  const darkMode = localStorage.getItem('darkMode') === 'true';
  if (darkMode) {
    document.body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
  } else {
    darkModeToggle.textContent = '🌙';
  }

  revealOnScroll(); // Reveal animasi saat halaman pertama kali dimuat
});

// Reveal on Scroll Animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);
