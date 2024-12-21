import { Card } from "./home.js";
import phoneIcon from "./images/contact-phone.png";
import emailIcon from "./images/contact-email.png";
import fbIcon from "./images/fb.png";
import igIcon from "./images/ig.png";
import xIcon from "./images/x.png";

class ContactCard extends Card {
  constructor( title, description, image, page){
    super( title, description, image, page );
  }
}

const page = 'contact';
const contact = [
  new ContactCard(
    'Facebook',
    'w_kitchen',
    fbIcon,
    page
  ),
  new ContactCard(
    'Instagram',
    '@w_kitchen',
    igIcon,
    page
  ),
  new ContactCard(
    'X',
    '@w_kitchen',
    xIcon,
    page
  ),
  new ContactCard(
    'Phone',
    '+62 888 888 888',
    phoneIcon,
    page
  ),
  new ContactCard(
    'Email',
    'wkitchen@email.com',
    emailIcon,
    page
  ),
];

const contactPage = function(){
  const container = document.createElement('div');
  const contactHeader = document.createElement('h1');
  contactHeader.classList.add('contact-header');
  contactHeader.textContent = 'Contact Us';
  container.classList.add(`container-${page}`);
  container.appendChild(contactHeader);
  contact.forEach(function(card){
    container.appendChild(card.generateCardNode('60px'));
  });
  return container;
}

export { contactPage };