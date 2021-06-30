let contact = () => {
  let content = document.getElementById('content');
  content.classList.add('contact');

  //container
  let container = document.createElement('div');
  container.classList.add('container');
  content.appendChild(container);

  //header
  let header = document.createElement('header');
  container.appendChild(header);

  let headline = document.createElement('h1');
  headline.textContent = `Contact us`;
  header.appendChild(headline);

  let platformContainer = document.createElement('div');
  platformContainer.classList.add('platformContainer');
  header.appendChild(platformContainer);

  
  let contact =[
    ['Facebook',`Cik Wee's`], 
    ['Instagram',`@theOriginalChweeKueh`], 
    ['Whatsapp','+60-1234567'], 
    ['Address','No.55, Jln Gunung Tinggi, 44000, Gunung Tahan, Malaysia']
  ];
  for(let i=0; i< contact.length; i++){
    const platform = document.createElement('div');
    const platformName = document.createElement('p');
    const platformDescription = document.createElement('p');

    platformName.classList.add('platformName');
    platformDescription.classList.add('platformDescription');
    platform.classList.add('platform');
    
    platformName.innerHTML = contact[i][0];
    platformDescription.innerHTML = contact[i][1];
    
    platformContainer.appendChild(platform);
    platform.appendChild(platformName);
    platform.appendChild(platformDescription);
  }
  

}
export default contact;