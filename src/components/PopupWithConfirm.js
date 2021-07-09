import { Popup } from './Popup.js';

class PopupWithConfirm extends Popup {

  constructor(popupSelector, handleFormSubmit) { //Конструктор попапа с подтверждением удаления
    super(popupSelector);
    this._handler = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }

  setEventListeners() { //Метод установки слушателей попапа с подтверждением удаления
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      this._handler(event);
    });
  }

  setCurrentCard(card) { //Запомнить карточку для удаления
    this._card = card;
  }

  getCurrentCard() { //Получить карточку для удаления
    return this._card;
  }

}

export { PopupWithConfirm };
