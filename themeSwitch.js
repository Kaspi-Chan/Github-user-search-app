let darkMode = localStorage.getItem('darkMode')
const themeButton = document.querySelector('.theme-icon-btn')
const moonIcon = themeButton.querySelector('.theme-icon .moon-svg')
const sunIcon = themeButton.querySelector('.theme-icon .sun-svg')
const themeButtonText = themeButton.querySelector('span');

const enableDarkMode = () => {
  document.body.classList.add('darkMode')
  localStorage.setItem('darkMode', 'enabled')
  sunIcon.classList.remove('hidden');
  moonIcon.classList.add('hidden');
  themeButtonText.textContent = 'Light';
}

const disableDarkMode = () => {
  document.body.classList.remove('darkMode')
  localStorage.setItem('darkMode', null)
  sunIcon.classList.add('hidden');
  moonIcon.classList.remove('hidden');
  themeButtonText.textContent = 'Dark';
}

if(darkMode === 'enabled'){
  enableDarkMode()

}else{
  disableDarkMode()
}

themeButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode')
  if(darkMode === 'enabled'){
    disableDarkMode()
  }
  else{
    enableDarkMode()
  }
})