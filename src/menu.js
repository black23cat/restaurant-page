import { Card } from "./home.js";
import englishBreakfastImage from "./images/menu/food/english-breakfast.jpeg";
import buburAyamImage from "./images/menu/food/bubur-ayam.jpeg";
import rolledOmeletteImage from "./images/menu/food/rolled-omelette.jpeg";
import icedCoffeeImage from "./images/menu/drinks/caramel-iced-coffee.jpeg";
import coffeeImage from "./images/menu/drinks/coffee.jpeg";
import teaImage from "./images/menu/drinks/tea.jpeg";
import icedTeaImage from "./images/menu/drinks/iced-tea.jpeg";

class MenuCard extends Card {
  constructor(title, description, image, price, page){
    super(title, description, image, page);
    this.price = price;
  }
  generateMenuCardNode(){
    const cardMenu = this.generateCardNode('200px');
    const priceDiv = document.createElement('div');
    priceDiv.classList.add('price');
    priceDiv.textContent = this.price;
    cardMenu.appendChild(priceDiv);

    return cardMenu;
  }
}
