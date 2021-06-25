import { Popup } from './Popup.js';

class PopupWithImage extends Popup {
  constructor(popupSelector) { //Конструктор попапа с картинкой
    super(popupSelector);
  }

  open(image, title) { //Метод открытия попапа с картинкой
    const popupImage = this._popup.querySelector('.popup__image');
    const popupCaption = this._popup.querySelector('.popup__caption');
    popupImage.src = image;
    popupImage.alt = title;
    popupCaption.textContent = title;
    super.open();
  }

}

export { PopupWithImage };
