import { initialCards } from './initial-data.js';
import { editProfileFormValidator, addCardFormValidator, addCard } from './forms.js';

initialCards.forEach((item) => {
  addCard(item, '#element');
});

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
