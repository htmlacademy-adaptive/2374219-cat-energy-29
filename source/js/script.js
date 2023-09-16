let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-nav--nojs');
navToggle.classList.remove('main-header__toggle--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed'))
  {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    navToggle.classList.remove('main-header__toggle--closed');
    navToggle.classList.add('main-header__toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    navToggle.classList.add('main-header__toggle--closed');
    navToggle.classList.remove('main-header__toggle--opened');
  }

});

const slider = document.querySelector('.slider');
const before = document.querySelector('.slider__cat--fat');
const beforeImage = document.querySelector('.example__image-cat--fat');
const button = document.querySelector('.slider__button');
const body = document.body;

let isActive = false;

button.addEventListener('mousedown', () => {
  isActive = true;
});

body.addEventListener('mouseup', () => {
  isActive = false;
});

body.addEventListener('mouseleave', () => {
  isActive = false;
});

const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  button.style.left = `${shift}px`;
};

const pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

body.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;
  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});

button.addEventListener('touchstart', () => {
  isActive = true;
});

body.addEventListener('touchend', () => {
  isActive = false;
});

body.addEventListener('touchcancel', () => {
  isActive = false;
});

body.addEventListener('touchmove', (e) => {
  if (!isActive) {
    return;
  }

  let x;

  let i;
  for (i = 0; i < e.buttondTouches.length; i++) {
    x = e.buttondTouches[i].pageX;
  }

  x -= slider.getBoundingClientRect().left;

  beforeAfterSlider(x);
  pauseEvents(e);
});
