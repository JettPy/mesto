const name = document.querySelector('.profile__name');
const status = document.querySelector('.profile__status');
const popup = document.querySelectorAll('.popup');
const editButton = document.querySelector('.button_type_edit');
const closeEditButton = popup[0].querySelector('.button_type_close');
const profileForm = popup[0].querySelector('.popup__form');
const inputName = popup[0].querySelector('.popup__input_field_name');
const inputStatus = popup[0].querySelector('.popup__input_field_status');
const addButton = document.querySelector('.button_type_add');
const closeElementButton = popup[1].querySelector('.button_type_close');
const elementForm = popup[1].querySelector('.popup__form');
const inputTitle = popup[1].querySelector('.popup__input_field_name');
const inputImage = popup[1].querySelector('.popup__input_field_status');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content;

function refresh() { //функция обновления полей в форме
  inputName.value = name.textContent;
  inputStatus.value = status.textContent;
}

function likeClck(event) { //функция активации лайка
  event.target.classList.toggle('button_active');
}

function deleteClck(event) { //функция удаления карточки с картинкой
  event.target.closest('.element').remove();
}

function loadElement(card) { //функция загрузки карточек с картинками
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__title').textContent = card.name;
  elements.append(cardElement);

  const likeButton = cardElement.querySelector('.button_type_like');
  const deliteButton = cardElement.querySelector('.button_type_del');

  likeButton.addEventListener('click', likeClck);
  deliteButton.addEventListener('click', deleteClck);
}

function addElement(card) { //функция добавление карточек с картинками
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__title').textContent = card.name;
  elements.prepend(cardElement);

  const likeButton = cardElement.querySelector('.button_type_like');
  const deliteButton = cardElement.querySelector('.button_type_del');

  likeButton.addEventListener('click', likeClck);
  deliteButton.addEventListener('click', deleteClck);
}

function profilePopUpOpen() { //функция открытия popup профиля
  refresh();
  popup[0].classList.add('popup_opened');
}

function profilePopUpClose() { //функция закрытия popup профиля
  popup[0].classList.remove('popup_opened');
}

function elementPopUpOpen() { //функция открытия popup элемента
  popup[1].classList.add('popup_opened');
}

function elementPopUpClose() { //функция закрытия popup элемента
  inputTitle.value = '';
  inputImage.value = '';
  popup[1].classList.remove('popup_opened');
}

function saveProfileData(event) { //функция сохранения имени и статуса пользователя
  event.preventDefault();
  name.textContent = inputName.value;
  status.textContent = inputStatus.value;
  profilePopUpClose();
}

function saveElementData(event) { //функция сохранения карточки с картинкой
  event.preventDefault();
  const element = {
    name: inputTitle.value,
    link: inputImage.value,
  }
  initialCards.push(element);
  addElement(element);
  elementPopUpClose();
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

initialCards.forEach(loadElement);


editButton.addEventListener('click', profilePopUpOpen);
closeEditButton.addEventListener('click', profilePopUpClose);
addButton.addEventListener('click', elementPopUpOpen);
closeElementButton.addEventListener('click', elementPopUpClose);
profileForm.addEventListener('submit', saveProfileData);
elementForm.addEventListener('submit', saveElementData);
