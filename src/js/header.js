const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.menu-close');

// Відкриття мобільного меню
menuToggle.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

// Закриття мобільного меню
menuClose.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

// Закриття меню при натисканні на посилання
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

document.querySelector('.action-button').addEventListener('click', function () {
  alert('Button clicked!');
});
