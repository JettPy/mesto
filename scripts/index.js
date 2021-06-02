import { initialCards } from './initial-data.js';
import { editProfileFormValidator, addCardFormValidator } from './forms.js';
import { addCard } from './functions.js';

initialCards.forEach((item) => {
  addCard(item, '#element');
});

editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
