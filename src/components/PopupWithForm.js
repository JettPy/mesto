import { Popup } from './Popup.js';

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) { //Конструктор попапа с форой
    super(popupSelector);
    this._handler = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputList = Array.from(this._popup.querySelectorAll('.popup__input'));
  }

  _getInputValues() { //Метод получения данных из формы
    const inputValues = {};
    this._inputList.forEach((field) => {
      inputValues[field.name] = field.value;
    });
    return inputValues;
  }

  close() { //Метод закрытия попапа с формой
    super.close();
    this._form.reset();
  }

  setEventListeners() { //Метод установки слушателей попапа с формой
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      this._handler(event, this._getInputValues());
    });
  }

}

export { PopupWithForm };
