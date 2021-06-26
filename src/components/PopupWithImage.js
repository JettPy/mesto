import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) { //Конструктор попапа с картинкой
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupCaption = this._popup.querySelector('.popup__caption');
  }

  open(image, title) { //Метод открытия попапа с картинкой
    this._popupImage.src = image;
    this._popupImage.alt = title;
    this._popupCaption.textContent = title;
    super.open();
  }

}

export { PopupWithImage };
