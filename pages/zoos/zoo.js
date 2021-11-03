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
const darkThemeLogo = '../../../assets/icons/logo-white.svg';

const whiteThemeTextColor = '#333333';
const whiteThemeBgColor = '#ffffff';
const whiteThemeBgGrayColor = '#f2f2f2';
const whiteThemeDotColor = '#ffffff';
const whiteThemeSwitcherBgColor = '#f2f2f2';
const whiteThemeDescriptionTextColor = '#4f4f4f';
const whiteThemeBgSlideColor = '#fefefe';
const whiteThemePosterBgColor = '#fefefe';
const whiteThemeLogo = '../../../assets/icons/logo-black.svg';


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
    document.querySelector('.header__logo').src = darkThemeLogo;
  } else {
    document.documentElement.style.setProperty('--bg-color-white', whiteThemeBgColor)
    document.documentElement.style.setProperty('--bg-color-gray', whiteThemeBgGrayColor)
    document.documentElement.style.setProperty('--text-color', whiteThemeTextColor)
    document.documentElement.style.setProperty('--description-text-color', darkThemeDescriptionTextColor)
    document.documentElement.style.setProperty('--bg-slide-color', whiteThemeBgSlideColor)
    document.documentElement.style.setProperty('--poster-bg-color', whiteThemePosterBgColor)
    document.querySelector('.header__logo').src = whiteThemeLogo;
  }
}

// Video Block

const videos = document.querySelectorAll('.iframe__wrapper');

videos.forEach(video => {
  video.addEventListener('click', (e) => {
    const newMainVideoSrc = e.target.previousElementSibling.src;
    const newVideoSrc = document.querySelector('.main-video').src;;

    document.querySelector('.main-video').attributes[3].nodeValue = newMainVideoSrc;
    e.target.previousElementSibling.src = newVideoSrc;
  })
})

if (+window.screen.width <= 1680) {
  const video = document.querySelector('.video');
  video.width = 164 + 'px';
  video.height = 94 + 'px';
}