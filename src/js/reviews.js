document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.getElementById('reviews-wrapper');
    const errorMessage = document.getElementById('error-message');

    // Завантаження відгуків із API
    fetch('https://portfolio-js.b.goit.study/api/reviews')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.length === 0) {
                errorMessage.style.display = 'block';
            } else {
                data.forEach(review => {
                    const slide = document.createElement('li'); // Використовуємо <li> для слайду
                    slide.classList.add('swiper-slide', 'review-card');

                    const avatar = review.avatar_url ? review.avatar_url : 'img/default-avatar.png'; // Аватар
                    const author = review.author ? review.author : 'Anonymous';
                    const text = review.review ? review.review : 'No review provided';

                    // Додавання відгуку
                    slide.innerHTML = `
                        <div class="container-review">
                            <p class="review">${text}</p>
                            <div class="review-author">
                                <img src="${avatar}" alt="${author}" class="author-photo" />
                                <p class="author">${author}</p>
                            </div>
                        </div>
                    `;

                    swiperWrapper.appendChild(slide);
                });
                initSwiper(); // Ініціалізація слайдера після додавання відгуків
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            errorMessage.style.display = 'block'; // Показати повідомлення про помилку
        });

    // Ініціалізація Swiper
    function initSwiper() {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1, // Показувати один слайд
            spaceBetween: 20, // Відстань між слайдами
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false, // Дозволити керування клавіатурою поза вікном
            }
        });
    }
});
