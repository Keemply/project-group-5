const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header-mobile-menu-container');
const closeButton = document.querySelector('.header-mobile-menu-close');

// Відкриваємо меню
menuToggle.addEventListener('click', () => {
  nav.style.display = 'flex'; // Відображаємо мобільне меню
});

// Закриваємо меню
closeButton.addEventListener('click', () => {
  nav.style.display = 'none'; // Сховати мобільне меню
});

// Закриваємо меню після вибору пункту
document.querySelectorAll('.header-mobile-list a').forEach(link => {
  link.addEventListener('click', () => {
    nav.style.display = 'none'; // Сховати мобільне меню
  });
});
