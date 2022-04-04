/* eslint-disable linebreak-style */
const closeBtn = document.querySelector('.close-container');
const hambager = document.querySelector('.nav_bars');
const mobNav = document.querySelector('.mobile_menu');
const mobLinks = document.querySelectorAll('.mobile-link');

closeBtn.addEventListener('click', () => {
  mobNav.style.cssText = `
  position: fixed;
  top: -9999px;
  left: -9999px;
`;
});

hambager.addEventListener('click', () => {
  mobNav.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  `;
});

mobLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobNav.style.cssText = `
    position: fixed;
    top: -999px;
    left: -999px;
  `;
  });
});
