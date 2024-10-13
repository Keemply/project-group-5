import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/';

const swiper = new Swiper('.swiper', {
  slidesPerView: 1, // Показувати один слайд за замовчуванням

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
    0: {
      slidesPerView: 1, // Показувати два слайди на екрані 1280px і більше
    },
    768: {
      slidesPerView: 1, // Показувати один слайд на екрані 768px і більше
    },
    1280: {
      slidesPerView: 2, // Показувати один слайд на екрані менше 768px
    },
  },
});

const reviewsContainer = document.querySelector('.swiper-wrapper');
async function getReviews() {
  try {
    const reviews = await axios('/reviews');
    console.log(reviews.data);
    return reviews.data;
  } catch (error) {
    console.log(error);
  }
}

console.log(swiper);
function swipeInit() {
  swiper.update();
}
console.log();
async function render() {
  try {
    const data = await getReviews();
    const input = data
      .map(
        object =>
          `<div class="swiper-slide review-obj">
          <p class="review-review">${object.review}</p>
          <div class="review-box">
          <img src="${object.avatar_url}" class="review-img"/>
          <p class="review-author">${object.author}</p>
          </div>
          </div>`
      )
      .join('');
    reviewsContainer.insertAdjacentHTML('beforeend', input);

    swipeInit();
  } catch (error) {
    console.log(error);
  }
}
render();
