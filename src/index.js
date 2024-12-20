import "./styles.css";
import "./home.css"
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { contactPage } from "./contact.js";

const screenDisplay = function (){
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(function(button){
    button.addEventListener('click', btnClickHandler);
  });

  function btnClickHandler(e){
    const content = document.getElementById('content');
    switch(e.target.classList.value){
      case 'home':
        content.textContent = '';
        content.appendChild(homePage());
        break;
      case 'menu':
        content.textContent = '';
        content.appendChild(menuPage());
        break;
      case 'contact':
        content.textContent = '';
        content.appendChild(contactPage());
        break;
    }
  }

  // Initial page load
  content.textContent = '';
  content.appendChild(homePage());
}();