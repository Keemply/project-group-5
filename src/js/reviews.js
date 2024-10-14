document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.getElementById('reviews-wrapper');
    const errorMessage = document.getElementById('error-message');

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
                    const slide = document.createElement('li'); 
                    slide.classList.add('swiper-slide', 'review-card');

                    const avatar = review.avatar_url || 'img/default-avatar.png'; // Аватар
                    const author = review.author || 'Anonymous';
                    const text = review.review || 'No review provided';

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
            errorMessage.style.display = 'block'; 
        });

    // Ініціалізація Swiper
    function initSwiper() {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 1, // Показувати один слайд за замовчуванням
            centeredSlides: true, // Центрування активного слайда
            spaceBetween: 20, // Відстань між слайдами
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            keyboard: {
                enabled: true,
                onlyInViewport: false, 
            },
            breakpoints: {
                1280: {
                    slidesPerView: 2, // Показувати два слайди на екрані 1280px і більше
                },
                768: {
                    slidesPerView: 1, // Показувати один слайд на екрані 768px і більше
                },
                0: {
                    slidesPerView: 1, // Показувати один слайд на екрані менше 768px
                },
            },
        });

        // Відключення кнопок при досягненні кінця списку
        swiper.on('reachEnd', () => {
            swiper.navigation.nextEl.classList.add('swiper-button-disabled');
        });
        
        swiper.on('reachBeginning', () => {
            swiper.navigation.prevEl.classList.add('swiper-button-disabled');
        });
        
        swiper.on('fromEdge', () => {
            swiper.navigation.nextEl.classList.remove('swiper-button-disabled');
            swiper.navigation.prevEl.classList.remove('swiper-button-disabled');
        });
    }
});
