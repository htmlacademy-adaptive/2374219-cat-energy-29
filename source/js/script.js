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
