import { openPopup, closePopup } from './functions.js';

const cardPopUp = document.querySelector('.popup_place_element-image');

const closeCardButton = cardPopUp.querySelector('.button_type_close');
const popUpImage = cardPopUp.querySelector('.popup__image');
const popUpCaption = cardPopUp.querySelector('.popup__caption');

class Card {
  constructor(data, cardSelector) { //Конструктор карточки
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {  //Получение шаблона карточки
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    this._templateImage = cardElement.querySelector('.element__image');
    this._templateTitle = cardElement.querySelector('.element__title');
    return cardElement;
  }

  _handleLikeClick(event) { //Функция активации лайка
    event.target.classList.toggle('button_active');
  }

  _handleDeleteClick() { //Функция удаления карточки с картинкой
    this._element.remove();
    this._element = null;
  }

  _handleOpenPopup() { //Открытие попапа картиочки
    popUpImage.src = this._image;
    popUpImage.alt = this._title;
    popUpCaption.textContent = this._title;
    openPopup(cardPopUp);
  }

  _handleClosePopup() { //Закрытие попапа картиочки
    popUpImage.src = '';
    popUpImage.alt = '';
    popUpCaption.textContent = '';
    closePopup(cardPopUp);
  }

  _setEventListeners() { //Установка слушателей событий на карточке
    const likeButton = this._element.querySelector('.button_type_like');
    const deliteButton = this._element.querySelector('.button_type_delete');
    const openButton = this._element.querySelector('.button_type_image');

    likeButton.addEventListener('click', (event) => {
      this._handleLikeClick(event);
    });
    deliteButton.addEventListener('click', () => {
      this._handleDeleteClick();
    });
    openButton.addEventListener('click', () => {
      this._handleOpenPopup();
    });
    closeCardButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
  }

  generateCard() { //Генерация DOM-элемента карточки
    this._element = this._getTemplate();
    this._setEventListeners();
    this._templateImage.src = this._image;
    this._templateImage.alt = this._title;
    this._templateTitle.textContent = this._title;
    return this._element;
  }
}

export { Card };
