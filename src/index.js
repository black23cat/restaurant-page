import "./styles.css";

const screenDisplay = function (){
  const buttons = document.querySelectorAll('nav button');
  buttons.forEach(function(button){
    button.addEventListener('click', btnClickHandler);
  });

  function btnClickHandler(e){
    const content = document.getElementById('content');
    switch(e.target.classList.value){
      case 'home':
        alert(`You click ${e.target.classList.value}`);
        break;
      case 'menu':
        alert(`You click ${e.target.classList.value}`);
        break;
      case 'contact':
        alert(`You click ${e.target.classList.value}`);
        break;
    }
  }

  // Initial page load
}();