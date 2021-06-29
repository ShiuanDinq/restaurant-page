import './style.css';
import home from './home.js';
import clear from './clear.js';



home();



let homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
  clear();
  home();
};