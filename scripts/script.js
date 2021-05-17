//   profile
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const editButton = document.querySelector('.button_type_edit');
//   profile popup
const profilePopUp = document.querySelector('.popup_place_profile');
const profileForm = document.forms.profile;
const inputName = profilePopUp.querySelector('.popup__input_field_name');
const inputStatus = profilePopUp.querySelector('.popup__input_field_status');
const closeEditButton = profilePopUp.querySelector('.button_type_close');
//   elements
const addButton = document.querySelector('.button_type_add');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('#element').content;
//   elements popup
const elementAddingPopUp = document.querySelector('.popup_place_add-element');
const elementForm = document.forms.element;
const inputTitle = elementAddingPopUp.querySelector('.popup__input_field_title');
const inputImage = elementAddingPopUp.querySelector('.popup__input_field_image');
const closeElementButton = elementAddingPopUp.querySelector('.button_type_close');
//   element popup
const elementImagePopUp = document.querySelector('.popup_place_element-image');
const closeImageButton = elementImagePopUp.querySelector('.button_type_close');
const popUpImage = elementImagePopUp.querySelector('.popup__image');
const popUpCaption = elementImagePopUp.querySelector('.popup__caption');
//overlays
const overlays = Array.from(document.querySelectorAll('.popup'));

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

function refreshForm(popup, form) { //функция обновления полей в форме
  const saveEditButton = popup.querySelector('.button_type_save');
  inputName.value = profileName.textContent;
  inputStatus.value = profileStatus.textContent;
  const inputList = Array.from(form.querySelectorAll('.popup__input'));
  inputList.forEach((inputElement) => {
    hideInputError(form, inputElement, config);
  });
  toggleButtonState(inputList, saveEditButton, config);
}

function handleLikeClick(event) { //функция активации лайка
  event.target.classList.toggle('button_active');
}

function handleDeleteClick(event) { //функция удаления карточки с картинкой
  event.target.closest('.element').remove();
}

function createCardElement(card) { //функция создания карточек с картинками
  const cardElement = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = cardElement.querySelector('.element__image');
  const elementTitle = cardElement.querySelector('.element__title');
  elementImage.src = card.link;
  elementImage.alt = card.name;
  elementTitle.textContent = card.name;

  const likeButton = cardElement.querySelector('.button_type_like');
  const deliteButton = cardElement.querySelector('.button_type_delete');
  const openButton = cardElement.querySelector('.button_type_image');

  likeButton.addEventListener('click', handleLikeClick);
  deliteButton.addEventListener('click', handleDeleteClick);
  openButton.addEventListener('click', () => openImagePopUp(card.link, card.name));

  return cardElement;
}

function exitViaEsc(event) {
  if (event.key === 'Escape') {
    closeProfilePopUp();
    closeElementPopUp();
    closeImagePopUp();
  }
}

function addElement(card) { //функция добавление карточек с картинками
  const cardElement = createCardElement(card);
  elements.prepend(cardElement);
}

function openPopup(popup) { //функция открытия popup
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', exitViaEsc);
}

function closePopup(popup) { //функция закрытия popup
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', exitViaEsc);
}

function openProfilePopUp() { //функция открытия popup профиля
  refreshForm(profilePopUp, profileForm);
  openPopup(profilePopUp);
}

function closeProfilePopUp() { //функция закрытия popup профиля
  closePopup(profilePopUp);
}

function openElementPopUp() { //функция открытия popup элемента
  refreshForm(elementAddingPopUp, elementForm);
  openPopup(elementAddingPopUp);
}

function closeElementPopUp() { //функция закрытия popup элемента
  elementForm.reset();
  closePopup(elementAddingPopUp);
}

function openImagePopUp(link, name) { //функция открытия карточки с картинкой
  popUpImage.src = link
  popUpImage.alt = name
  popUpCaption.textContent = name
  openPopup(elementImagePopUp);
}

function closeImagePopUp() { //функция закрытия карточки с картинкой
  closePopup(elementImagePopUp);
}

function saveProfileData(event) { //функция сохранения имени и статуса пользователя
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileStatus.textContent = inputStatus.value;
  closeProfilePopUp();
}

function saveElementData(event) { //функция сохранения карточки с картинкой
  event.preventDefault();
  const element = {
    name: inputTitle.value,
    link: inputImage.value,
  }
  addElement(element);
  closeElementPopUp();
}

initialCards.forEach(addElement);


editButton.addEventListener('click', openProfilePopUp);
closeEditButton.addEventListener('click', closeProfilePopUp);
addButton.addEventListener('click', openElementPopUp);
closeElementButton.addEventListener('click', closeElementPopUp);
profileForm.addEventListener('submit', saveProfileData);
elementForm.addEventListener('submit', saveElementData);
closeImageButton.addEventListener('click', closeImagePopUp);
overlays.forEach((overlay) => {
  const window = overlay.querySelector('.dialog-window');
  window.addEventListener('click', (event) => {
    event.stopPropagation();
  });
  overlay.addEventListener('click', (event) => {
    closePopup(event.target.closest('.popup'));
  });
});
