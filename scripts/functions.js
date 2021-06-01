import { profileFormValidator, elementFormValidator } from './forms.js';
import { profilePopUp, elementAddingPopUp } from './popups.js';
import { Card } from './Card.js';

const editButton = document.querySelector('.button_type_edit');
const closeEditButton = profilePopUp.querySelector('.button_type_close');
const addButton = document.querySelector('.button_type_add');
const closeElementButton = elementAddingPopUp.querySelector('.button_type_close');

const profileForm = document.forms.profile;
const elementForm = document.forms.element;

const elements = document.querySelector('.elements');

const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const inputName = profilePopUp.querySelector('.popup__input_field_name');
const inputStatus = profilePopUp.querySelector('.popup__input_field_status');

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

function handleProfileFormSubmit(event) { //Функция сохранения имени и статуса пользователя
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputStatus.value;
  closePopup(profilePopUp);
}

function handleCardFormSubmit(event) { //Функция сохранения карточки с картинкой
  event.preventDefault();
  const inputTitle = elementAddingPopUp.querySelector('.popup__input_field_title');
  const inputImage = elementAddingPopUp.querySelector('.popup__input_field_image');
  const element = {
    name: inputTitle.value,
    link: inputImage.value,
  }
  const card = new Card(element, '#element');
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
  elementForm.reset();
  closePopup(elementAddingPopUp);
}

profileForm.addEventListener('submit', handleProfileFormSubmit);

elementForm.addEventListener('submit', handleCardFormSubmit);

editButton.addEventListener('click', () => {
  profileFormValidator.refreshForm();
  openPopup(profilePopUp);
});

closeEditButton.addEventListener('click', () => {
  closePopup(profilePopUp);
});

addButton.addEventListener('click', () => {
  elementFormValidator.refreshForm();
  openPopup(elementAddingPopUp);
});

closeElementButton.addEventListener('click', () => {
  elementForm.reset();
  closePopup(elementAddingPopUp);
});

overlays.forEach((overlay) => { //Закрытие попапов по нажатию на оверлею
  const window = overlay.querySelector('.dialog-window');
  window.addEventListener('mousedown', (event) => {
    event.stopPropagation();
  });
  overlay.addEventListener('mousedown', (event) => {
    closePopup(event.target.closest('.popup'));
  });
});

export { openPopup, closePopup };
