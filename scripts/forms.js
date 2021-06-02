import { config } from './initial-data.js';
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { openPopup, closePopup } from './functions.js';

const elements = document.querySelector('.elements');

const profilePopUp = document.querySelector('.popup_place_profile');
const elementAddingPopUp = document.querySelector('.popup_place_add-element');

const editButton = document.querySelector('.button_type_edit');
const closeEditButton = profilePopUp.querySelector('.button_type_close');
const addButton = document.querySelector('.button_type_add');
const closeElementButton = elementAddingPopUp.querySelector('.button_type_close');

const profileForm = document.forms.profile;
const elementForm = document.forms.element;

const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const inputName = profilePopUp.querySelector('.popup__input_field_name');
const inputStatus = profilePopUp.querySelector('.popup__input_field_status');

const profileFormValidator = new FormValidator(config, document.forms.profile);
const elementFormValidator = new FormValidator(config, document.forms.element);

function handleProfileFormSubmit(event) { //Функция сохранения имени и статуса пользователя
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputStatus.value;
  closePopup(profilePopUp);
}

function handleCardFormSubmit(event) { //Функция сохранения карточки с картинкой
  event.preventDefault();
  const inputTitle = elementAddingPopUp.querySelector('.popup__input_field_title');
  const inputImage = elementAddingPopUp.querySelector('.popup__input_field_image');
  const element = {
    name: inputTitle.value,
    link: inputImage.value,
  }
  addCard(element, '#element');
  elementForm.reset();
  closePopup(elementAddingPopUp);
}

function addCard(element, cardSelector) { //функция добавление карточек в разметку
  const card = new Card(element, '#element');
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

elementForm.addEventListener('submit', handleCardFormSubmit);

editButton.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputStatus.value = profileStatus.textContent;
  profileFormValidator.refreshForm();
  openPopup(profilePopUp);
});

closeEditButton.addEventListener('click', () => {
  closePopup(profilePopUp);
});

addButton.addEventListener('click', () => {
  elementFormValidator.refreshForm();
  openPopup(elementAddingPopUp);
});

closeElementButton.addEventListener('click', () => {
  elementForm.reset();
  closePopup(elementAddingPopUp);
});

export { profileFormValidator, elementFormValidator };
