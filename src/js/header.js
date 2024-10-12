// Отримуємо елементи меню і кнопки
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenuButton = document.querySelector('.close-menu');
const menuLinks = document.querySelectorAll('.mobile-menu__list a');

// Відкриття меню
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

// Закриття меню по кнопці
closeMenuButton.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Закриття меню при натисканні на посилання
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
  });
});
