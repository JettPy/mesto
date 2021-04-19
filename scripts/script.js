let name = document.querySelector('.profile__name');
let status = document.querySelector('.profile__status');
let form = document.querySelector('.popup__form');
let inputName = document.querySelector('.popup__input_field_name');
let inputStatus = document.querySelector('.popup__input_field_status');
let popup = document.querySelector('.popup');
let editButton = document.querySelector('.button_type_edit');
let closeButton = document.querySelector('.button_type_close');

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
