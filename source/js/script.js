//меню
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

//Слайдер для галереи
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

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

//Рэндж слайдер для цены
const rangeSlider = document.getElementById('range-slider');

if (rangeSlider) {
	noUiSlider.create(rangeSlider, {
    start: [0, 900],
		connect: true,
		step: 1,
    range: {
			'min': [0],
			'max': [1000]
    }
	});

	const inputMin = document.getElementById('input-min');
	const inputMax = document.getElementById('input-max');
	const inputs = [inputMin, inputMax];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (e) => {
			setRangeSlider(index, e.currentTarget.value);
		});
	});
}

//карта
const map = L.map('map-leaflet')
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 18);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '/../img/icons/stack.svg#map',
  iconSize: [38, 50],
  iconAnchor: [19, 50],
});

const mainPinMarker = L.marker(
  {
    lat: 59.96831,
    lng: 30.31748,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});
