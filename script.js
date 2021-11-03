// Black Theme Toggle

const toggleBg = document.querySelector('.toggle__bg');
const toggleDot = document.querySelector('.toggle__dot');

let isThemeDark = false;

const darkThemeTextColor = '#f2f2f2';
const darkThemeBgColor = '#333333';
const darkThemeBgGrayColor = '#4f4f4f';
const darkThemeDotColor = '#1b1b1b';
const darkThemeSwitcherBgColor = '#4f4f4f';
const darkThemeDescriptionTextColor = '#f2f2f2';
const darkThemeBgSlideColor = '#3c3c3c';
const darkThemePosterBgColor = '#333333';
const darkThemeMapLink = 'url(./assets/images/map/map-black.svg)';
const darkThemeLogo = './assets/icons/logo-white.svg';
const darkThemePrevArrow = './assets/icons/arrow-white-left.svg';
const darkThemeNextArrow = './assets/icons/arrow-white-right.svg';

const whiteThemeTextColor = '#333333';
const whiteThemeBgColor = '#ffffff';
const whiteThemeBgGrayColor = '#f2f2f2';
const whiteThemeDotColor = '#ffffff';
const whiteThemeSwitcherBgColor = '#f2f2f2';
const whiteThemeDescriptionTextColor = '#4f4f4f';
const whiteThemeBgSlideColor = '#fefefe';
const whiteThemePosterBgColor = '#fefefe';
const whiteThemeMapLink = 'url(./assets/images/map-svg.svg)';
const whiteThemeLogo = './assets/icons/logo-black.svg';
const whiteThemePrevArrow = './assets/icons/prev-arrow-black.svg';
const whiteThemeNextArrow = './assets/icons/next-arrow-black.svg';


changeTheme(isThemeDark)

toggleBg.addEventListener('click', () => {
  if (isThemeDark) {
    isThemeDark = false;
    toggleDot.style.setProperty('--dot-position', '6px')
    changeTheme(isThemeDark)
  } else {
    isThemeDark = true;
    toggleDot.style.setProperty('--dot-position', '26px')
    changeTheme(isThemeDark)
  }

})

function changeTheme(isDark) {
  if (isDark) {
    document.documentElement.style.setProperty('--bg-color-white', darkThemeBgColor)
    document.documentElement.style.setProperty('--bg-color-gray', darkThemeBgGrayColor)
    document.documentElement.style.setProperty('--text-color', darkThemeTextColor)
    document.documentElement.style.setProperty('--description-text-color', darkThemeDescriptionTextColor)
    document.documentElement.style.setProperty('--bg-slide-color', darkThemeBgSlideColor)
    document.documentElement.style.setProperty('--poster-bg-color', darkThemePosterBgColor)
    document.querySelector('.map__container').style.backgroundImage = darkThemeMapLink
    document.querySelector('.header__logo').src = darkThemeLogo;
    document.querySelector('.prev-prev').src = darkThemePrevArrow;
    document.querySelector('.next-next').src = darkThemeNextArrow;
    document.querySelector('.next').src = darkThemeNextArrow;
  } else {
    document.documentElement.style.setProperty('--bg-color-white', whiteThemeBgColor)
    document.documentElement.style.setProperty('--bg-color-gray', whiteThemeBgGrayColor)
    document.documentElement.style.setProperty('--text-color', whiteThemeTextColor)
    document.documentElement.style.setProperty('--description-text-color', darkThemeDescriptionTextColor)
    document.documentElement.style.setProperty('--bg-slide-color', whiteThemeBgSlideColor)
    document.documentElement.style.setProperty('--poster-bg-color', whiteThemePosterBgColor)
    document.querySelector('.map__container').style.backgroundImage = whiteThemeMapLink;
    document.querySelector('.header__logo').src = whiteThemeLogo;
    document.querySelector('.prev-prev').src = whiteThemePrevArrow;
    document.querySelector('.next-next').src = whiteThemeNextArrow;
    document.querySelector('.next').src = whiteThemeNextArrow;
  }
}
// ---------------------------------------------------------------------------------------------------------------------------
// Carousel FS

const firstScreenSliderInner = document.querySelector('.fs-slider__inner');
const firstScreenSlides = document.querySelectorAll('.first-screen__slide');

const fpRange = document.querySelector('.first-screen_range');
const rangeCounter = document.querySelector('.fp-text');
fpRange.addEventListener('input', fsInputSliderHandler);
firstScreenSliderInner.addEventListener('click', changeSlideOnClick);
let counter = 1;
let ratio = 0.56;

function changeSlideOnClick(e) {
  const screenWidth = +window.screen.width;
  if (screenWidth <= 1680) ratio = 0.2;

  firstScreenSlides.forEach((slide, idx) => {
    if (!e.target.classList.contains('first-screen__slide--active')) {
      firstScreenSlides[counter].classList.remove('first-screen__slide--active');
      counter = idx;
      firstScreenSlides[counter].classList.add('first-screen__slide--active');
      firstScreenSliderInner.style.transform = `translateX(${(-100 / (firstScreenSlides.length + ratio)) * (counter-1)}%)`;
      fpRange.value = counter;
      rangeCounter.innerHTML = `0${counter+1}/`;
    }
  })
}

function fsInputSliderHandler() {
  const screenWidth = +window.screen.width;
  if (screenWidth <= 1680) ratio = 0.2;

  firstScreenSliderInner.style.transition = '0.4s all ease';
  firstScreenSlides[counter].classList.remove('first-screen__slide--active');
  counter = +fpRange.value;
  firstScreenSlides[counter].classList.add('first-screen__slide--active');
  firstScreenSliderInner.style.transform = `translateX(${(-100 / (firstScreenSlides.length + ratio)) * (counter-1)}%)`;
  rangeCounter.innerHTML = `0${counter+1}/`;
}

// --------------------------------------------------------------------------------------------------------------------
// Slider Pets in Zoo

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const petsInput = document.querySelector('.pets__input');
const petsCounter = document.querySelector('.pets__text');
const petsSlider = document.querySelector('.pets__slider');
const slides = document.querySelectorAll('.pets__slide');

let visible = 4;
let count = 0;

prev.addEventListener('click', petsSliderHandler);
next.addEventListener('click', petsSliderHandler);
petsInput.addEventListener('input', petsInputSliderHandler)

function petsSliderHandler(e) {
  const prevCount = count;
  petsSlider.style.transition = '0.4s all ease';
  slides[count].classList.remove('pets__slide--active');
  if (e.target.classList.contains('next')) count++;
  if (e.target.classList.contains('prev')) count--;
  if (count > slides.length - 1) count = 0;
  if (count < 0) count = slides.length - 1;
  if (count > visible - 1 && count > prevCount) petsSlider.style.transform = `translateX(calc(${-100 / (slides.length) * (count - (visible - 1))}%))`;
  if (((slides.length - count) > (visible - 1)) && count < prevCount) petsSlider.style.transform = `translateX(calc(${-100 / (slides.length) * (count)}%))`;
  slides[count].classList.add('pets__slide--active');
  petsCounter.innerHTML = `0${count+1}/`;
  petsInput.value = `${count}`;
}

function petsInputSliderHandler() {
  const screenWidth = +window.screen.width;
  let resizingConst = 1;
  const prevCount = count;
  petsSlider.style.transition = '0.4s all ease';
  slides[count].classList.remove('pets__slide--active');
  count = +petsInput.value;
  slides[count].classList.add('pets__slide--active');
  if (screenWidth <= 980) {
    visible = 3;
    resizingConst = 2
  }
  if (count > visible - 1 && count > prevCount) petsSlider.style.transform = `translateX(calc(${-100 / (slides.length) * (count - (visible - resizingConst))}%))`;
  if (((slides.length - count) > (visible - 1)) && count < prevCount) petsSlider.style.transform = `translateX(calc(${-100 / (slides.length) * (count)}%))`;
  petsCounter.innerHTML = `0${count+1}/`;
}