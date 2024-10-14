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

// -----Перемикач фону-----------

// Отримуємо чекбокс і елемент body
const checkbox = document.querySelector('#theme-toggle');
const body = document.body;

// Перевіряємо, чи вже є збережена тема в localStorage
const currentTheme = localStorage.getItem('theme');

// Якщо є, застосовуємо її
if (currentTheme) {
  body.classList.add(currentTheme);

  // Якщо збережена тема — dark, то встановлюємо чекбокс як активний
  if (currentTheme === 'dark') {
    checkbox.checked = true;
  }
}

// Функція для перемикання теми
const switchTheme = e => {
  if (e.target.checked) {
    // Якщо чекбокс активований, додаємо клас 'dark' для body
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark'); // Зберігаємо тему в localStorage
  } else {
    // Якщо чекбокс вимкнений, видаляємо клас 'dark'
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light'); // Зберігаємо світлу тему
  }
};

// Додаємо подію на зміну стану чекбокса
checkbox.addEventListener('change', switchTheme);
