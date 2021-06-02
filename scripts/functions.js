import { Card } from './Card.js';

const cards = document.querySelector('.elements');
const overlays = Array.from(document.querySelectorAll('.popup'));

function exitViaEsc(event) { //Функция выхода из попапа по esc
  if (event.key === 'Escape') {
    const openedPopUp = document.querySelector('.popup_opened');
    closePopup(openedPopUp);
  }
}

function openPopup(popup) { //Функция открытия popup
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', exitViaEsc);
}

function closePopup(popup) { //Функция закрытия popup
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', exitViaEsc);
}

function addCard(element, cardSelector) { //функция добавление карточек в разметку
  const card = new Card(element, cardSelector);
  const cardElement = card.generateCard();
  cards.prepend(cardElement);
}

overlays.forEach((overlay) => { //Закрытие попапов по нажатию на оверлею
  const window = overlay.querySelector('.dialog-window');
  window.addEventListener('mousedown', (event) => {
    event.stopPropagation();
  });
  overlay.addEventListener('mousedown', (event) => {
    closePopup(event.target.closest('.popup'));
  });
});

export { openPopup, closePopup, addCard };
