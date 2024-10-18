const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const menuClose = document.querySelector('.menu-close');
const pageBody = document.body;
// Відкриття мобільного меню
menuToggle.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  pageBody.style.overflow = 'hidden';
});

// Закриття мобільного меню
menuClose.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  pageBody.style.overflow = '';
});

// Закриття меню при натисканні на посилання
document.querySelectorAll('.mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    pageBody.style.overflow = '';
  });
});

// document.querySelector('.action-button').addEventListener('click', function () {
//   alert('Button clicked!');
// });

// -----Перемикач фону-----------

// Отримуємо чекбокс і елемент body
const checkbox = document.querySelector('#theme-toggle');
const body = document.body;
// Перевіряємо, чи вже є збережена тема в localStorage
const currentTheme = localStorage.getItem('theme');
// Якщо є, застосовуємо її
// Якщо збережена тема — dark, то встановлюємо чекбокс як активний
if (currentTheme === 'dark') {
  body.classList.add('night-theme');
}

// Якщо збережена тема — dark, то встановлюємо чекбокс як активний
if (currentTheme === 'dark') {
  checkbox.checked = true;
}

// Функція для перемикання теми
const switchTheme = e => {
  if (e.target.checked) {
    // Якщо чекбокс активований, додаємо клас 'dark' для body
    body.classList.add('night-theme');
    localStorage.setItem('theme', 'dark'); // Зберігаємо тему в localStorage
  } else {
    // Якщо чекбокс вимкнений, видаляємо клас 'dark'
    body.classList.remove('night-theme');
    localStorage.setItem('theme', 'light'); // Зберігаємо світлу тему
  }
};
// Додаємо подію на зміну стану чекбокса
checkbox.addEventListener('change', switchTheme);
