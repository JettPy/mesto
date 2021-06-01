import { elementImagePopUp } from './popups.js';
import { openPopup, closePopup } from './functions.js';

const closeImageButton = elementImagePopUp.querySelector('.button_type_close');
const popUpImage = elementImagePopUp.querySelector('.popup__image');
const popUpCaption = elementImagePopUp.querySelector('.popup__caption');

class Card {
  constructor(data, cardSelector) { //Конструктор карточки
    this._title = data.name;
    this._image = data.link;
    this._cardSelector = cardSelector;
  }

  _getTemplate() {  //Получение шаблона карточки
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }

  _handleLikeClick(event) { //Функция активации лайка
    event.target.classList.toggle('button_active');
  }

  _handleDeleteClick(event) { //Функция удаления карточки с картинкой
    event.target.closest('.element').remove();
  }

  _handleOpenPopup() { //Открытие попапа картиочки
    popUpImage.src = this._image;
    popUpImage.alt = this._title;
    popUpCaption.textContent = this._title;
    openPopup(elementImagePopUp);
  }

  _handleClosePopup() { //Закрытие попапа картиочки
    popUpImage.src = '';
    popUpImage.alt = '';
    popUpCaption.textContent = '';
    closePopup(elementImagePopUp);
  }

  _setEventListeners() { //Установка слушателей событий на карточке
    const likeButton = this._element.querySelector('.button_type_like');
    const deliteButton = this._element.querySelector('.button_type_delete');
    const openButton = this._element.querySelector('.button_type_image');

    likeButton.addEventListener('click', (event) => {
      this._handleLikeClick(event);
    });
    deliteButton.addEventListener('click', (event) => {
      this._handleDeleteClick(event);
    });
    openButton.addEventListener('click', () => {
      this._handleOpenPopup();
    });
    closeImageButton.addEventListener('click', () => {
      this._handleClosePopup();
    });
  }

  generateCard() { //Генерация DOM-элемента карточки
    this._element = this._getTemplate();
    this._setEventListeners();
    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__image').alt = this._title;
    this._element.querySelector('.element__title').textContent = this._title;
    return this._element;
  }
}

export { Card };
