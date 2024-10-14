import axios from 'axios';
import Swiper from 'swiper';
import 'swiper/css/bundle';
console.log('Hi');

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study/api/';
document.addEventListener('DOMContentLoaded', function () {
  const nextBut = document.querySelector('.next');
  const prevBut = document.querySelector('.prev');
  const errorMessage = document.querySelector('.error-message');
  window.addEventListener('resize', () => {
    if (swiper.isBeginning) {
      prevBut.classList.add('swiper-button-disabled');
    } else if (prevBut.classList.contains('swiper-button-disabled')) {
      prevBut.classList.remove('swiper-button-disabled');
    }
    if (swiper.isEnd) {
      nextBut.classList.add('swiper-button-disabled');
    } else if (nextBut.classList.contains('swiper-button-disabled')) {
      nextBut.classList.remove('swiper-button-disabled');
    }
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowLeft') {
      prevObj();
    } else if (event.key === 'ArrowRight') {
      nextObj();
    }
  });
  function nextObj() {
    swiper.slideNext();
    if (swiper.isBeginning) {
      prevBut.classList.add('swiper-button-disabled');
    } else if (prevBut.classList.contains('swiper-button-disabled')) {
      prevBut.classList.remove('swiper-button-disabled');
    }
    if (swiper.isEnd) {
      nextBut.classList.add('swiper-button-disabled');
    } else if (nextBut.classList.contains('swiper-button-disabled')) {
      nextBut.classList.remove('swiper-button-disabled');
    }
  }
  function prevObj() {
    swiper.slidePrev();
    if (swiper.isBeginning) {
      prevBut.classList.add('swiper-button-disabled');
    } else if (prevBut.classList.contains('swiper-button-disabled')) {
      prevBut.classList.remove('swiper-button-disabled');
    }
    if (swiper.isEnd) {
      nextButBut.classList.add('swiper-button-disabled');
    } else if (nextBut.classList.contains('swiper-button-disabled')) {
      nextBut.classList.remove('swiper-button-disabled');
    }
  }
  nextBut.addEventListener('click', nextObj);
  prevBut.addEventListener('click', prevObj);
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1, // Показувати один слайд за замовчуванням
    spaceBetween: 20, // Відстань між слайдами
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
      return reviews.data;
    } catch (error) {
      errorMessage.classList.remove('error-message');
      if (swiper.isBeginning) {
        prevBut.classList.add('swiper-button-disabled');
      } else if (prevBut.classList.contains('swiper-button-disabled')) {
        prevBut.classList.remove('swiper-button-disabled');
      }
      if (swiper.isEnd) {
        nextBut.classList.add('swiper-button-disabled');
      } else if (nextBut.classList.contains('swiper-button-disabled')) {
        nextBut.classList.remove('swiper-button-disabled');
      }
      console.log(error);
    }
  }

  function swipeInit() {
    // swiper.update();
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
});
