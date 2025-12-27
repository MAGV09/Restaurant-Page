import 'modern-normalize/modern-normalize.css';
import './style.css';
import renderHome from './pageLoad.js';
import renderMenu from './menu.js';
import renderAbout from './about.js'
const nav = document.querySelector('#navigation');
const content = document.querySelector('#content');
// const homeBtn = document.querySelector('#home');
// const menuBtn = document.querySelector('#menu');
// const aboutBtn = document.querySelector('#about');
// const contactBtn = document.querySelector('#contact');

//initalize
// renderHome();
nav.addEventListener('click', (e) => handleClick(e));

function handleClick(e) {
  if (e.target.id !== 'navigation') resetContent();

  switch (e.target.id) {
    case 'home-btn':
      renderHome();
      break;

    case 'menu-btn':
      renderMenu();
      break;

    case 'about-btn':
      renderAbout();
      break;

    case 'contact-btn':
      renderContact();
      break;
  }
}

function resetContent() {
  content.textContent = '';
  const active = document.querySelector('.active');
  if (active) {
    active.classList.remove('active');
  }
}

export { content };
