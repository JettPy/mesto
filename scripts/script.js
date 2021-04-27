const name = document.querySelector('.profile__name');
const status = document.querySelector('.profile__status');
const form = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_field_name');
const inputStatus = document.querySelector('.popup__input_field_status');
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.button_type_edit');
const closeButton = document.querySelector('.button_type_close');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content;

function refresh() { //функция обновления полей в форме
  inputName.value = name.textContent;
  inputStatus.value = status.textContent;
}

function popUpOpen() { //функция открытия popup
  refresh();
  popup.classList.add('popup_opened');
}

function popUpClose() { //функция закрытия popup
  popup.classList.remove('popup_opened');
}

function saveProfileData(event) { //функция сохранения имени и статуса пользователя
  event.preventDefault();
  name.textContent = inputName.value;
  status.textContent = inputStatus.value;
  popUpClose();
}

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function (card){
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__title').textContent = card.name;
  elements.append(cardElement);
});


editButton.addEventListener('click', popUpOpen);
closeButton.addEventListener('click', popUpClose);
form.addEventListener('submit', saveProfileData);
