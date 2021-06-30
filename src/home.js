import footer from './footer.js';
import nav from './nav.js';

let home = () => {

  let content = document.querySelector('#content');
  content.classList.add('home');

  //insert nav
  if(!document.querySelector('nav')) {
    let navbar = nav();
    content.appendChild(navbar);
  }

  //container
  let container = document.createElement('div');
  container.classList.add('container');
  content.appendChild(container);
  

  //header
  let header = document.createElement('header');
  container.appendChild(header);
  let headline = document.createElement('h1');
  headline.textContent = `Cik Wee's`;
  header.appendChild(headline);
  let tagline = document.createElement('p');
  tagline.innerHTML = 'Home of Chwee Kueh';
  header.appendChild(tagline);

  //footer
  if(!document.querySelector('footer')) {
    footer();
  }

}

export default home