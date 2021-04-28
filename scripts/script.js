const popup = document.querySelectorAll('.popup');
//   profile
const name = document.querySelector('.profile__name');
const status = document.querySelector('.profile__status');
const editButton = document.querySelector('.button_type_edit');
//   profile popup
const profileForm = popup[0].querySelector('.popup__form');
const inputName = popup[0].querySelector('.popup__input_field_name');
const inputStatus = popup[0].querySelector('.popup__input_field_status');
const closeEditButton = popup[0].querySelector('.button_type_close');
//   elements
const addButton = document.querySelector('.button_type_add');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content;
//   elements popup
const elementForm = popup[1].querySelector('.popup__form');
const inputTitle = popup[1].querySelector('.popup__input_field_title');
const inputImage = popup[1].querySelector('.popup__input_field_image');
const closeElementButton = popup[1].querySelector('.button_type_close');
//   element popup
const closeImageButton = popup[2].querySelector('.button_type_close');
const popUpImage = popup[2].querySelector('.popup__image');
const popUpCaption = popup[2].querySelector('.popup__caption');

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

function addElement(card) { //функция добавление карточек с картинками
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  cardElement.querySelector('.element__image').src = card.link;
  cardElement.querySelector('.element__title').textContent = card.name;
  elements.prepend(cardElement);

  const likeButton = cardElement.querySelector('.button_type_like');
  const deliteButton = cardElement.querySelector('.button_type_del');
  const openButton = cardElement.querySelector('.button_type_image');

  likeButton.addEventListener('click', likeClck);
  deliteButton.addEventListener('click', deleteClck);
  openButton.addEventListener('click', imagePopUpOpen);
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

function imagePopUpOpen(event) { //функция открытия карточки с картинкой
  console.log('Клик!');
  popup[2].classList.add('popup_opened');
  popUpImage.src = event.target.nextElementSibling.nextElementSibling.src;
  popUpCaption.textContent = event.target.closest('.element').querySelector('.element__title').textContent;
}

function imagePopUpClose() { //функция закрытия карточки с картинкой
  popup[2].classList.remove('popup_opened');
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

initialCards.forEach(addElement);


editButton.addEventListener('click', profilePopUpOpen);
closeEditButton.addEventListener('click', profilePopUpClose);
addButton.addEventListener('click', elementPopUpOpen);
closeElementButton.addEventListener('click', elementPopUpClose);
profileForm.addEventListener('submit', saveProfileData);
elementForm.addEventListener('submit', saveElementData);
closeImageButton.addEventListener('click', imagePopUpClose);
