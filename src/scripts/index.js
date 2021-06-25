import '../pages/index.css';

import { initialCards, config } from './initial-data.js';
import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { Section } from './Section.js';
import { PopupWithImage } from './PopupWithImage.js';
import { PopupWithForm } from './PopupWithForm.js';
import { UserInfo } from './UserInfo.js';

const editProfileButton = document.querySelector('.button_type_edit');
const addCardButton = document.querySelector('.button_type_add');
const inputName = document.querySelector('.popup__input_field_name');
const inputStatus = document.querySelector('.popup__input_field_status');
const userInfo = new UserInfo({ nameSelector: '.profile__name', statusSelector: '.profile__status' });
const editProfilePopup = new PopupWithForm('.popup_place_profile', handleProfileFormSubmit);
const addCardPopup = new PopupWithForm('.popup_place_add-element', handleCardFormSubmit);
const imagePopup = new PopupWithImage('.popup_place_element-image');
const editProfileFormValidator = new FormValidator(config, document.forms.profile);
const addCardFormValidator = new FormValidator(config, document.forms.element);

const cardSection = new Section({ //Заполнение исходными данными
  items: initialCards,
  renderer: (item) => addCard(item)
}, '.elements');

function handleProfileFormSubmit(event, data) { //Функция сохранения имени и статуса пользователя
  event.preventDefault();
  userInfo.setUserInfo(data);
  editProfilePopup.close();
}

function handleCardFormSubmit(event, data) { //Функция сохранения карточки с картинкой
  event.preventDefault();
  const element = {
    link: data.image,
    name: data.title
  }
  addCard(element);
  addCardPopup.close();
}

function handleCardClick(image, title) { //Открытие попапа картиочки
  imagePopup.open(image, title);
}

function addCard(element) { //Функция добавление карточки в секцию
  const card = new Card(element, '#element', handleCardClick);
  const cardElement = card.generateCard();
  cardSection.addItem(cardElement);
}

editProfileButton.addEventListener('click', () => {
  const data = userInfo.getUserInfo();
  inputName.value = data.name;
  inputStatus.value = data.status;
  editProfileFormValidator.refreshForm();
  editProfilePopup.open();
});

addCardButton.addEventListener('click', () => {
  addCardFormValidator.refreshForm();
  addCardPopup.open();
});

editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
imagePopup.setEventListeners();
cardSection.renderItems();
editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
