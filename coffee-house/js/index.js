


let slider = document.querySelector('.slider__list');
let sliderCard = document.querySelectorAll('.slider__card');
let prev = document.querySelector('.slide__icon-prev');
let next = document.querySelector('.slide__icon-next');
let dots = document.querySelectorAll('.element__pagination');

let autoPlaySlider;
if (typeof next !== 'undefined' && next !== null) {
  autoPlaySlider = setInterval(() => {next.click()}, 5000);
}


//-------------Slider Favorite Coffee--------------------------

let activeSlide = 0;
let lastSlide = sliderCard.length - 1;

function startSliderInterval() {
  autoPlaySlider = setInterval(function() {
    activeSlide = (activeSlide + 1) % sliderCard.length;
    reloadSlider();
  }, 5000);
}

function stopSliderInterval() {
  if (autoPlaySlider) {
    clearInterval(autoPlaySlider);
  }
}

if (next) {
next.addEventListener('click', function() {
  if (activeSlide + 1 > lastSlide) {
    activeSlide = 0;
  } else {
    activeSlide += 1;
  }
  reloadSlider();
  stopSliderInterval();
  startSliderInterval();
})
}

if (prev) {
prev.addEventListener('click', function() {
  if (activeSlide - 1 < 0) {
    activeSlide = lastSlide;
  } else {
    activeSlide -= 1;
  }
  reloadSlider();
  stopSliderInterval();
  startSliderInterval();
})
}


function reloadSlider() {
  let checkLeft = sliderCard[activeSlide].offsetLeft;
  slider.style.left = -checkLeft + 'px';
  let lastActiveDot = document.querySelector('.element__pagination.active');
  lastActiveDot.classList.remove('active');
  dots[activeSlide].classList.add('active');
}

window.onresize = function(event) {
  reloadSlider();
};