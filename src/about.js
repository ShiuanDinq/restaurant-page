let about = () => {
  let content = document.getElementById('content');
  content.classList.add('about');

  //container
  let container = document.createElement('div');
  container.classList.add('container');
  content.appendChild(container);

  //header
  let header = document.createElement('header');
  container.appendChild(header);
  let headline = document.createElement('h1');
  headline.textContent = `  The story of Cik Wee's Chwee Kueh`;
  header.appendChild(headline);
  let tagline = document.createElement('p');
  tagline.innerHTML = `From a humble beginning of roadside stall, Cik Wee's is now Malaysian's go-to for all their Chwee Kueh's needs`;
  header.appendChild(tagline);
  
  

}
export default about;