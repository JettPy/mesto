import { initialCards } from './initial-data.js';
import { profileFormValidator, elementFormValidator, addCard } from './forms.js';

initialCards.forEach((item) => {
  addCard(item, '#element');
});

profileFormValidator.enableValidation();
elementFormValidator.enableValidation();
