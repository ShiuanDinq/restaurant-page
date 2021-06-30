let footer = () => {
  let footer = document.createElement('footer');
  let footerText = document.createElement('p');
  footer.appendChild(footerText);
  footerText.innerHTML = `Copyright @Edmund HSD. All rights reserved.`
  document.body.appendChild(footer);
}

export default footer;