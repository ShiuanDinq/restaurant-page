import './style.css';
import home from './home.js';
import about from './about.js';
import menu from './menu.js';
import contact from './contact.js';
import clear from './clear.js';



home();



let homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
  clear();
  home();
};

let aboutBtn = document.getElementById('about');
aboutBtn.onclick = () => {
  clear();
  about();
};

let menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
  clear();
  menu();
};

let contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
  clear();
  contact();
};