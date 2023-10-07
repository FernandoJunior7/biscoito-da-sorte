const closedCookie = document.getElementById('closed-cookie');
const openedCookie = document.getElementById('opened-cookie');
const closedCookieImage = document.getElementById('open');
const otherCookie = openedCookie.querySelector('button');

closedCookieImage.addEventListener('click', () => {
  closedCookie.classList.toggle('hidden');
  openedCookie.classList.toggle('hidden');
})

otherCookie.addEventListener('click', () => {
  closedCookie.classList.toggle('hidden');
  openedCookie.classList.toggle('hidden');
})
