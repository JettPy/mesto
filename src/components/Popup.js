class Popup {
  constructor(popupSelector) { //Конструктор попапа
    this._popup = document.querySelector(popupSelector);
  }

  _handleEscClose = (event) => { //Метод выхода из попапа по esc
    if (event.key === 'Escape') {
      this.close();
    }
  }

  open() { //Метод открытия попапа
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() { //Метод закрытия попапа
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() { //Метод установки слушателей попапа
    const closeButton = this._popup.querySelector('.button_type_close');
    const window = this._popup.querySelector('.dialog-window');
    closeButton.addEventListener('click', () => {
      this.close();
    });
    window.addEventListener('mousedown', (event) => {
      event.stopPropagation();
    });
    this._popup.addEventListener('mousedown', (event) => {
      this.close();
    });
  }
}

export { Popup };
