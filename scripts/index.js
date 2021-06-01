import { Card } from './Card.js';
import { initialCards, config } from './initial-сards-and-config.js';
import { profileFormValidator, elementFormValidator } from './forms.js';

const elements = document.querySelector('.elements');

initialCards.forEach((item) => {
  const card = new Card(item, '#element');
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
});

profileFormValidator.enableValidation();
elementFormValidator.enableValidation();
