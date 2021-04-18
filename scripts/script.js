const name = document.querySelector('.profile__name');
const status = document.querySelector('.profile__status');
const form = document.querySelector('.popup__form');
const inputName = document.querySelector('.popup__input_field_name');
const inputStatus = document.querySelector('.popup__input_field_status');
const popup = document.querySelector('.popup');
const editButton = document.querySelector('.button_type_edit');
const closeButton = document.querySelector('.button_type_close');

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

editButton.addEventListener('click', popUpOpen);
closeButton.addEventListener('click', popUpClose);
form.addEventListener('submit', saveProfileData);
