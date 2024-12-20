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

const page = 'menu';
const foodMenu = [
  new MenuCard(
    'English Breakfast',
    `A hearty and traditional British breakfast, 
    featuring a full cooked breakfast with bacon, 
    sausages, eggs (fried, scrambled or poached), 
    baked beans, grilled tomatoes, mushrooms, and toast.`,
    englishBreakfastImage,
    '$ 10',
    page
  ),
  new MenuCard(
    'Chicken Porridge',
    `Chicken porridge, a comforting Indonesian breakfast
    dish. Savory rice porridge topped with shredded 
    chicken, scallions, crispy shallots, and served 
    with various condiments.`,
    buburAyamImage,
    '$ 5',
    page
  ),
  new MenuCard(
    'Rolled Omelette',
    `Classic Rolled Omelette A hearty omelette, 
    delicately rolled and served with your choice of 
    filling. Popular choices include cheese, ham, and 
    vegetables.`,
    rolledOmeletteImage,
    '$ 4',
    page
  ),
];

const drinksMenu = [
  new MenuCard(
    'Coffee',
    `A strong, rich brew made from freshly roasted coffee beans.`,
    coffeeImage,
    '$ 1.5',
    page
  ),
  new MenuCard(
    'Iced Caramel Coffee',
    `A refreshing blend of rich espresso, sweet caramel syrup, and creamy milk, served over ice.`,
    icedCoffeeImage,
    '$ 2.5',
    page
  ),
  new MenuCard(
    'Tea',
    `A classic and robust tea with a full-bodied flavor.`,
    teaImage,
    '$ 1',
    page
  ),
  new MenuCard(
    'Iced Tea',
    'Refreshingly cold brewed tea.',
    icedTeaImage,
    '$ 2',
    page
  ),
];

const menuPage = function (){
  const container = document.createElement('div');
  const foodMenuContainer = document.createElement('div');
  const drinkMenuContainer = document.createElement('div');
  container.classList.add(`container-${page}`);
  foodMenuContainer.classList.add('food-menu-container');
  drinkMenuContainer.classList.add('drink-menu-container');
  foodMenu.forEach(function(menu) {
    foodMenuContainer.appendChild(menu.generateMenuCardNode());
  });
  drinksMenu.forEach(function(menu) {
    drinkMenuContainer.appendChild(menu.generateMenuCardNode());
  });
  container.appendChild(foodMenuContainer);
  container.appendChild(drinkMenuContainer);
  
  return container;
}

export { menuPage };