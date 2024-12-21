import "./styles.css";
import "./menu.css";
import "./contact.css"
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
        resetActiveBtn();
        content.textContent = '';
        content.appendChild(homePage());
        e.target.classList.add('active');
        break;
      case 'menu':
        resetActiveBtn();
        content.textContent = '';
        content.appendChild(menuPage());
        e.target.classList.add('active');
        break;
      case 'contact':
        resetActiveBtn();
        content.textContent = '';
        content.appendChild(contactPage());
        e.target.classList.add('active');
        break;
    }
  }

  function resetActiveBtn(){
    buttons.forEach(button => {
      button.classList.remove('active');
    })
  }

  // Initial page load
  content.textContent = '';
  content.appendChild(homePage());
  buttons[0].classList.add('active');
}();