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
