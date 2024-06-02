const URL = `https://api.github.com/users`
const inputField = document.getElementById('input-username');
const userForm = document.getElementById('form-username')
const userSection = document.querySelector('.user-info')


const getUserData = async () => {
  try{
    const response = await fetch(`${URL}/${inputField.value}`)
    if(!response.ok){
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data = await response.json();
    return data
  }catch(err){
    console.error('Failed to fetch data:', error);
  }
}

const updateUserSectionHandler = async () => {
  event.preventDefault();
  const userData = await getUserData();
  console.log(userData)

  updateUserAvatar(userData);
  updateUserAccInfo(userData)
  updateUserBio(userData);
  updateUserAccData(userData)
  updateUserSocials(userData)
}

const updateUserAvatar = (userData) => {
  const avatarImg = userSection.querySelector('.avatar > img')

  if(userData.avatar_url){
    avatarImg.setAttribute('src', userData.avatar_url)
  }
}

const updateUserAccInfo = (userData) => {
  const userName = userSection.querySelector('.user-name');
  const username = userSection.querySelector('.user-username');
  const joinedDate = userSection.querySelector('.user-joined-date');

  if(!userData.name){
    userName.textContent = userData.login;
  }
  else{
    userName.textContent = userData.name;
  }

  username.textContent = `@${userData.login}`
  const dateString = extractDateInfo(userData.created_at)
  joinedDate.textContent = `Joined ${dateString}`
}

const updateUserBio = (userData) => {
  const bio = userSection.querySelector('.user-bio')
  if(userData.bio){
    bio.textContent = userData.bio;
  }
  else{
    bio.textContent = 'This profile has no bio'
    bio.classList.add('no-bio')
  }
} 

const updateUserAccData = (userData) => {
  const repos = userSection.querySelector('.user-data-repos')
  const followers = userSection.querySelector('.user-data-followers')
  const following = userSection.querySelector('.user-data-following')

  repos.textContent = userData.public_repos;
  followers.textContent = userData.followers;
  following.textContent = userData.following;
}

const updateUserSocials = (userData) => {
  const userLocation = userSection.querySelector('.user-socials-location');
  const userSite = userSection.querySelector('.user-socials-website');
  const userTwitter = userSection.querySelector('.user-socials-twitter');
  const userCompany = userSection.querySelector('.user-socials-company');

  userData.location ? userLocation.textContent = userData.location : handleSocialsUnavailable(userLocation);
  userData.blog ? handleSocialsAvailable(userSite, userData.blog) : handleSocialsUnavailable(userSite);
  userData.twitter_username ? handleSocialsAvailable(userTwitter, userData.twitter_username) : handleSocialsUnavailable(userTwitter);
  userData.company ? handleSocialsAvailable(userCompany, userData.company, true): handleSocialsUnavailable(userCompany);
}

const extractDateInfo = (dateString) => {
  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'short'})
  const day = date.getDate();
  const year = date.getFullYear();

  return `${day} ${month} ${year}`
}

const handleSocialsAvailable = (socialElement, link, isCompany) => {
  socialElement.textContent = link;
  isCompany ? link = `https://github.com/${link.split('@')[1]}` : link;
  socialElement.setAttribute('href', link)
}
const handleSocialsUnavailable = (socialElement) => {
  socialElement.textContent = 'Not available'
  socialElement.removeAttribute('href')
  socialElement.parentElement.classList.add('not-available')
}

userForm.addEventListener('submit', updateUserSectionHandler)