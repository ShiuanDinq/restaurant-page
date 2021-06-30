let menu = () => {
  let content = document.getElementById('content');
  content.classList.add('menu');

  //container
  let container = document.createElement('div');
  container.classList.add('container');
  content.appendChild(container);

  //header
  let header = document.createElement('header');
  container.appendChild(header);

  let headline = document.createElement('h1');
  headline.textContent = `Our Specialties`;
  header.appendChild(headline);

  let itemContainer = document.createElement('div');
  itemContainer.classList.add('itemContainer');
  header.appendChild(itemContainer);

  
  let menu =[
    ['Fried Chwee Kueh','Stir fried Chwee Kueh with generous serving of prawns. Comes with Chwee Kueh'], 
    ['Steamed Chwee Kueh','Traditional Chwee Kueh served fresh with topping of preserved radish. Comes with Chwee Kueh'], 
    ['Braised Chwee Kueh','Chwee kueh braised for days in thick gravy of traditional pork trotter. Comes with Chwee Kueh'], 
    ['Chwee Kueh Soup','Chwee kueh infused with the essence of ginseng soup. Comes with Chwee Kueh']
  ];
  for(let i=0; i< menu.length; i++){
    const item = document.createElement('div');
    const itemName = document.createElement('p');
    const itemDescription = document.createElement('p');

    itemName.classList.add('itemName');
    itemDescription.classList.add('itemDescription');
    item.classList.add('item');
    
    itemName.innerHTML = menu[i][0];
    itemDescription.innerHTML = menu[i][1];
    
    itemContainer.appendChild(item);
    item.appendChild(itemName);
    item.appendChild(itemDescription);
  }
  

}
export default menu;