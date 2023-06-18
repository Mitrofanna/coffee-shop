const nav = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__button');

nav.classList.add('navigation--close');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('navigation--close')) {
    nav.classList.remove('navigation--close');
    nav.classList.add('navigation--open');
  } else {
    nav.classList.add('navigation--close');
    nav.classList.remove('navigation--open');
  }
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

