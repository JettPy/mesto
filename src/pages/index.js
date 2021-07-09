import './index.css';

import { config, options } from '../utils/initial-data.js';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Api } from '../components/Api.js';
import { PopupWithConfirm } from '../components/PopupWithConfirm.js';

const editProfileButton = document.querySelector('.button_type_edit');
const addCardButton = document.querySelector('.button_type_add');
const editAvatarButton = document.querySelector('.profile__avatar-button');
const inputName = document.querySelector('.popup__input_field_name');
const inputStatus = document.querySelector('.popup__input_field_status');
const userInfo = new UserInfo({ nameSelector: '.profile__name', statusSelector: '.profile__status', avatarSelector: '.profile__avatar' });
const editProfilePopup = new PopupWithForm('.popup_place_profile', handleProfileFormSubmit);
const addCardPopup = new PopupWithForm('.popup_place_add-element', handleCardFormSubmit);
const imagePopup = new PopupWithImage('.popup_place_element-image');
const editAvatarPopup = new PopupWithForm('.popup_place_edit-avatar', handleAvatarFormSubmit);
const delitePopup = new PopupWithConfirm('.popup_place_delite-element', handleCardDeliteSubmit);
const editProfileFormValidator = new FormValidator(config, document.forms.profile);
const addCardFormValidator = new FormValidator(config, document.forms.element);
const editAvatarFormValidator = new FormValidator(config, document.forms.avatar);
const api = new Api(options);
let cardSection = undefined;

function renderUser(user) {//Функция заполнение профиля исходными данными
  userInfo.setUserInfo({ name: user.name, status: user.about });
  userInfo.setUserAvatar(user.avatar);
  userInfo.setId(user._id);
}

function renderCards(initialCards) { //Функция заполнение rкарточек исходными данными
  cardSection = new Section({
    items: initialCards,
    renderer: (item) => addCard(item)
  }, '.elements');
  cardSection.renderItems();
}

function handleProfileFormSubmit(event, data) { //Функция сохранения имени и статуса пользователя
  event.preventDefault();
  const button = this._popup.querySelector(".popup__button");
  button.textContent = 'Сохранение...';
  api.updateUserInfo(data.name, data.status)
    .then(() => {
      userInfo.setUserInfo(data);
      editProfilePopup.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      button.textContent = 'Сохранить';
    });
}

function handleCardFormSubmit(event, data) { //Функция сохранения карточки с картинкой
  event.preventDefault();
  const button = this._popup.querySelector(".popup__button");
  button.textContent = 'Сохранение...';
  api.addCard(data.title, data.image)
    .then((result) => {
      addCard(result);
      addCardPopup.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      button.textContent = 'Сохранить';
    });
}

function handleAvatarFormSubmit(event, data) { //Функция сохранения аватара пользователя
  event.preventDefault();
  const button = this._popup.querySelector(".popup__button");
  button.textContent = 'Сохранение...';
  api.updateAvatar(data.image)
    .then(() => {
      userInfo.setUserAvatar(data.image);
      editAvatarPopup.close();
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      button.textContent = 'Сохранить';
    });
}

function handleCardDeliteSubmit(event) { //Функция удаления карточки
  event.preventDefault();
  const card = delitePopup.getCurrentCard();
  api.deleteCard(card.getId())
    .then(() => {
      card.handleDeleteClick();
      delitePopup.close();
    })
    .catch((error) => {
      console.log(error);
    });
}

function handleCardClick(image, title) { //Открытие попапа картиочки
  imagePopup.open(image, title);
}

function handleCardDelite(card) { //Открытие попапа подтверждения удаления картиочки
  delitePopup.setCurrentCard(card);
  delitePopup.open();
}

function handleCardLike(card) { //Лайк/Дизлайк карточки
  let likeState = undefined;
  const cardId = card.getId()
  if (this._likes.some((visitor) => { return this._userId === visitor._id; })) {
    likeState = api.dislike(cardId)
  } else {
    likeState = api.like(cardId);
  }
  return likeState
    .then((result) => {
      card._likes = result.likes;
      card.handleLikeClick();
    })
    .catch((error) => {
      console.log(error);
    });
}

function addCard(element) { //Функция добавление карточки в секцию
  const card = new Card(element, '#element', handleCardClick, handleCardDelite, handleCardLike, userInfo.getId());
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

editAvatarButton.addEventListener('click', () => {
  editAvatarFormValidator.refreshForm();
  editAvatarPopup.open();
});

api.getUserInfo()
  .then((result) => { //Запрос информации о пользователе на сервер
    renderUser(result);
  })
  .catch((error) => {
    console.log(error);
  });

api.getInitialCards()
  .then((result) => { //Запрос информации о карточках на сервер
    renderCards(result);
  })
  .catch((error) => {
    console.log(error);
  });

editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
imagePopup.setEventListeners();
editAvatarPopup.setEventListeners();
delitePopup.setEventListeners();
editProfileFormValidator.enableValidation();
addCardFormValidator.enableValidation();
editAvatarFormValidator.enableValidation();
