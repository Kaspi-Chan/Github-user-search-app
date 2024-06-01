const body = document.querySelector('body')
const themeButton = document.querySelector('.theme-icon-btn')
const themeButtonText = themeButton.querySelector('span');
const moonIcon = themeButton.querySelector('.theme-icon .moon-svg')
const sunIcon = themeButton.querySelector('.theme-icon .sun-svg')

const switchTheme = () => {
  body.classList.toggle('darkMode');

  let isDarkMode = body.classList.contains('darkMode');
  themeButtonText.textContent = isDarkMode ? 'Light' : 'Dark';
  moonIcon.classList.toggle('hidden', isDarkMode)
  sunIcon.classList.toggle('hidden', !isDarkMode)
}

themeButton.addEventListener('click', switchTheme)