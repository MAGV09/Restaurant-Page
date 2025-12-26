import 'modern-normalize/modern-normalize.css';
import './style.css';
import renderHome from './pageLoad';

const nav =document.querySelector('#navigation')
const content = document.querySelector('#content');
const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');
const contactBtn = document.querySelector('#contact');

//initalize
// renderHome();
nav.addEventListener('click', (e) => handleClick(e));

function handleClick(e) {
  resetContent();
console.log('oi');
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
}
