import { config } from './initial-data.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup } from './functions.js';

const cards = document.querySelector('.elements');

const editProfileFormPopup = document.querySelector('.popup_place_profile');
const addCardFormPopup = document.querySelector('.popup_place_add-element');

const editProfileButton = document.querySelector('.button_type_edit');
const closeEditProfileButton = editProfileFormPopup.querySelector('.button_type_close');
const addCardButton = document.querySelector('.button_type_add');
const closeAddCardButton = addCardFormPopup.querySelector('.button_type_close');

const editProfileForm = document.forms.profile;
const addCardForm = document.forms.element;

const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const inputName = editProfileFormPopup.querySelector('.popup__input_field_name');
const inputStatus = editProfileFormPopup.querySelector('.popup__input_field_status');

const editProfileFormValidator = new FormValidator(config, document.forms.profile);
const addCardFormValidator = new FormValidator(config, document.forms.element);

function handleProfileFormSubmit(event) { //Функция сохранения имени и статуса пользователя
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputStatus.value;
  closePopup(editProfileFormPopup);
}

function handleCardFormSubmit(event) { //Функция сохранения карточки с картинкой
  event.preventDefault();
  const inputTitle = addCardFormPopup.querySelector('.popup__input_field_title');
  const inputImage = addCardFormPopup.querySelector('.popup__input_field_image');
  const card = {
    name: inputTitle.value,
    link: inputImage.value,
  }
  addCard(card, '#element');
  addCardForm.reset();
  closePopup(addCardFormPopup);
}

function addCard(element, cardSelector) { //Функция добавление карточек в разметку
  const card = new Card(element, cardSelector);
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
}

editProfileForm.addEventListener('submit', handleProfileFormSubmit);

addCardForm.addEventListener('submit', handleCardFormSubmit);

editProfileButton.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputStatus.value = profileStatus.textContent;
  editProfileFormValidator.refreshForm();
  openPopup(editProfileFormPopup);
});

closeEditProfileButton.addEventListener('click', () => {
  closePopup(editProfileFormPopup);
});

addCardButton.addEventListener('click', () => {
  addCardFormValidator.refreshForm();
  openPopup(addCardFormPopup);
});

closeAddCardButton.addEventListener('click', () => {
  addCardForm.reset();
  closePopup(addCardFormPopup);
});

export { editProfileFormValidator, addCardFormValidator, addCard };
