import View from './appview.js';

class SlideView extends View {
  _parentElement = document.querySelectorAll('.slide');
  curSlide = 0;
  maxSlide = this._parentElement.length;

  _slider(slidesElement, containerElm) {
    let curSlide = 0;
    const maxSlide = document.querySelectorAll('.slide').length;

    slidesElement = document.querySelectorAll(slidesElement);
    containerElm = document.querySelector(containerElm);

    const createDots = function () {
      slidesElement.forEach(function (_, i) {
        containerElm.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`);
      });
    };

    const activateDot = function (slide) {
      document.querySelectorAll('.dots__dot').forEach((dot) => dot.classList.remove('dots__dot--active'));

      document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    };

    const goToSlide = function (slide) {
      slidesElement.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
    };

    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }

      goToSlide(curSlide);
      activateDot(curSlide);
    };

    const init = function () {
      goToSlide(0);
      createDots();

      activateDot(0);
    };

    init();

    document.querySelector('.slider__btn--right').addEventListener('click', nextSlide.bind(this));
    document.querySelector('.slider__btn--left').addEventListener('click', prevSlide.bind(this));
  }
}

export default new SlideView();
