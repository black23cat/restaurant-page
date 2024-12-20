import englishBrakfastImage from "./images/home-image.png";

class Card{
  constructor(title, description, image, page){
    this.title = title;
    this.description = description;
    this.image = image;
    this.page = page;
  }

  generateCardNode(cardImageWidth){
    const card = document.createElement('div');
    const paragraphDivs = document.createElement('div');
    const imageDivs = document.createElement('div');
    const headerPara = document.createElement('h1');
    const para = document.createElement('p');
    const homeImage = document.createElement('img');
    card.classList.add('card');
    card.classList.add(this.page);
    paragraphDivs.setAttribute('class','paragraph-container');
    imageDivs.setAttribute('class', 'card-image-container');
    headerPara.textContent = this.title;
    para.textContent = this.description;
    homeImage.src = this.image;
    homeImage.setAttribute('width', cardImageWidth);
    paragraphDivs.appendChild(headerPara);
    paragraphDivs.appendChild(para);
    imageDivs.appendChild(homeImage);
    card.appendChild(paragraphDivs);
    card.appendChild(imageDivs);
  
    return card;
  }
}

const homePage = function(){
  const container = document.createElement('div');
  container.classList.add('container-home');
  container.appendChild(homeCard.generateCardNode('500px'));

  return container;
}

const homeCard = new Card(
  'Enjoy Our Delicious Breakfast',
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
  Mauris bibendum ut justo at mollis. Integer eleifend nunc vitae urna 
  pulvinar maximus. Suspendisse est nibh, tempor ut hendrerit quis, varius 
  vitae elit. Ut purus dolor, vulputate vel eros suscipit, gravida ullamcorper
  lacus. Ut finibus tellus sit amet fringilla iaculis. In et ultrices sapien. 
  Cras suscipit interdum tempus. Sed interdum euismod est, at mollis erat 
  faucibus in. Nulla leo elit, interdum a venenatis vel, ullamcorper et 
  purus. Nam at vehicula elit.`,
  englishBrakfastImage,
  'home'
);

export { homePage, Card };