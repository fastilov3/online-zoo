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
const darkThemeMapLink = 'url(../../assets/images/map/map-black.svg)';
const darkThemeLogo = '../../assets/icons/logo-white.svg';
const darkThemePrevArrow = '../../assets/icons/arrow-white-left.svg';
const darkThemeNextArrow = '../../assets/icons/arrow-white-right.svg';

const whiteThemeTextColor = '#333333';
const whiteThemeBgColor = '#ffffff';
const whiteThemeBgGrayColor = '#f2f2f2';
const whiteThemeDotColor = '#ffffff';
const whiteThemeSwitcherBgColor = '#f2f2f2';
const whiteThemeDescriptionTextColor = '#4f4f4f';
const whiteThemeBgSlideColor = '#fefefe';
const whiteThemePosterBgColor = '#fefefe';
const whiteThemeMapLink = 'url(../../assets/images/map-svg.svg)';
const whiteThemeLogo = '../../assets/icons/logo-black.svg';
const whiteThemePrevArrow = '../../assets/icons/prev-arrow-black.svg';
const whiteThemeNextArrow = '../../assets/icons/next-arrow-black.svg';


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
  }
}

// Slider

const sliderInner = document.querySelector('.gallery__inner');
const sliderInput = document.querySelector('.range');
const prev = document.querySelector('.prev-prev');
const next = document.querySelector('.next-next');
const pins = document.querySelector('.map__container');

prev.addEventListener('click', changeSliderOnArrow);
next.addEventListener('click', changeSliderOnArrow);
sliderInner.addEventListener('click', activateSlideOnClick);
sliderInput.addEventListener('input', changeSliderWithInputRange);
pins.addEventListener('click', activateMapPinOnClick);
document.querySelector('.map__form').addEventListener('click', (e) => {
  const slides = document.querySelectorAll('.gallery__img');

  slides.forEach(slide => {
    if (slide.classList.contains('gallery__img_active')) {
      document.querySelector('.map__form').action = `../zoos/${slide.name}/${slide.name}.html#live_broadcast`;
      if (slide.name === 'tiger' || slide.name === 'elephant' || slide.name === 'lion' || slide.name === 'zebra') {
        document.querySelector('.map__form').action = '';
      }
    }
  })

})

let visible = 8;
let count = 1;

function activateSlideOnClick(e) {
  const slides = document.querySelectorAll('.gallery__img');

  if (e.target.classList.contains('gallery__img')) {
    slides.forEach(slide => slide.classList.remove('gallery__img_active'));
    e.target.classList.add('gallery__img_active');
    slides.forEach((slide, idx) => {
      if (slide.classList.contains('gallery__img_active')) count = idx
    })
  }

  inputCounterHandler(count);
  activateMapPin(slides, count);

}

function changeSliderOnArrow(e) {
  const slides = document.querySelectorAll('.gallery__img');
  const screenWidth = +window.screen.width;

  sliderInner.style.transition = '0.4s all ease';
  slides[count].classList.remove('gallery__img_active');

  if (e.target.classList.contains('next-next')) count++;
  if (e.target.classList.contains('prev-prev')) count--;
  if (count > slides.length - 1) count = 0;
  if (count < 0) count = slides.length - 1;
  if (screenWidth <= 1680) {
    visible = 5;
    if (count > visible - 1) sliderInner.style.transform = `translateX(calc(${-100 / (slides.length) * (count - (visible - 1)) }%))`;
    if ((slides.length - count) > (visible + 2)) sliderInner.style.transform = `translateX(calc(${-100 / (slides.length) * count }%))`;
  }
  slides[count].classList.add('gallery__img_active');
  inputCounterHandler(count);
  activateMapPin(slides, count);
}

function changeSliderWithInputRange() {
  const slides = document.querySelectorAll('.gallery__img');
  const screenWidth = +window.screen.width;

  sliderInner.style.transition = '0.4s all ease';
  slides[count].classList.remove('gallery__img_active');
  count = +sliderInput.value;
  if (screenWidth <= 1680) {
    visible = 5;
    if (count > visible - 1) sliderInner.style.transform = `translateX(calc(${-100 / (slides.length) * (count - (visible - 1)) }%))`;
    if ((slides.length - count) > (visible + 2)) sliderInner.style.transform = `translateX(calc(${-100 / (slides.length) * count }%))`;
  }
  slides[count].classList.add('gallery__img_active');

  inputCounterHandler(count);
  activateMapPin(slides, count);
}

function inputCounterHandler(count) {
  const activeSlide = document.querySelector('.label__text_active');
  const sliderInput = document.querySelector('.range');

  activeSlide.innerHTML = `0${ count + 1 }/`;
  sliderInput.value = count;
}

function activateMapPin(slides, count) {
  const pins = document.querySelectorAll('.pin__form');

  pins.forEach(pin => {
    pin.classList.remove('pin__form-active');
    if (pin.id === slides[count].name) pin.classList.add('pin__form-active');
  });
}

function activateMapPinOnClick(e) {
  const slides = document.querySelectorAll('.gallery__img');
  const screenWidth = +window.screen.width;

  sliderInner.style.transition = '0.4s all ease';
  slides[count].classList.remove('gallery__img_active');

  slides.forEach((slide, idx) => {
    if (e.target.id === slide.name) count = idx;
  })
  if (screenWidth <= 1680) {
    visible = 5;
    if (count > visible - 1) sliderInner.style.transform = `translateX(calc(${-100 / (slides.length) * (count - (visible - 1)) }%))`;
    if ((slides.length - count) > (visible + 2)) sliderInner.style.transform = `translateX(calc(${-100 / (slides.length) * count}%))`;
  }
  slides[count].classList.add('gallery__img_active');
  inputCounterHandler(count);
  activateMapPin(slides, count);
}