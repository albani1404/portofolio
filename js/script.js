// Inisialisasi semua fitur saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  setupSmoothScroll();
  setupNavbarScroll();
  setupDarkMode();
  setupMenuToggle(); // <== Tambahkan ini
  revealOnScroll(); // Jalankan saat load pertama
  setupContactForm();
});

// Fungsi: Smooth Scroll untuk navigasi anchor
function setupSmoothScroll() {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Fungsi: Ubah background navbar saat scroll
function setupNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    navbar.style.backgroundColor = scrollY > 50 ? 'rgba(30, 58, 138, 1)' : 'rgba(30, 58, 138, 0.9)';
  });
}

// Fungsi: Toggle Dark Mode dengan simpan ke localStorage
function setupDarkMode() {
  const toggle = document.getElementById('dark-mode-toggle');
  if (!toggle) return;

  const isDark = localStorage.getItem('darkMode') === 'true';
  document.body.classList.toggle('dark-mode', isDark);
  toggle.textContent = isDark ? '☀️' : '🌙';

  toggle.addEventListener('click', () => {
    const currentlyDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', currentlyDark);
    toggle.textContent = currentlyDark ? '☀️' : '🌙';
  });
}

// Fungsi: Toggle Menu untuk responsif
function setupMenuToggle() {
  const menuToggle = document.getElementById('menu-toggle');
  const navItems = document.getElementById('nav-items');

  if (!menuToggle || !navItems) return;

  menuToggle.addEventListener('click', () => {
    navItems.classList.toggle('active');
  });
}

// Fungsi: Reveal animasi saat elemen masuk viewport
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add('active');
    } else {
      el.classList.remove('active');
    }
  });
}

// Optimasi scroll untuk reveal animasi (throttle via requestAnimationFrame)
let isScrolling = false;
window.addEventListener('scroll', () => {
  if (!isScrolling) {
    window.requestAnimationFrame(() => {
      revealOnScroll();
      isScrolling = false;
    });
    isScrolling = true;
  }
});

// Fungsi: Setup Form Kontak
function setupContactForm() {
  // Kamu bisa isi ini sesuai fitur EmailJS atau apapun nanti.
}
