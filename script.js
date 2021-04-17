let name = document.querySelector('.profile__name');
let status = document.querySelector('.profile__status');

let form = document.querySelector('.popup__form');

let editButton = document.querySelector('.button_type_edit');
let closeButton = document.querySelector('.button_type_close');
let saveButton = document.querySelector('.button_type_save');
let addButton = document.querySelector('.button_type_add');

function refresh() {
  form.elements.name.value = name.textContent;
  form.elements.status.value = status.textContent;
}

function popUpToggler() {

  let popup = document.querySelector('.popup');

  popup.classList.toggle('popup_opened');
  refresh();
}

refresh();

editButton.addEventListener('click', popUpToggler);
closeButton.addEventListener('click', popUpToggler);

saveButton.addEventListener('click', function(event) {

  event.preventDefault();

  name.textContent = document.querySelector('.popup__form').elements.name.value;
  status.textContent = document.querySelector('.popup__form').elements.status.value;

  popUpToggler();
});

addButton.addEventListener('click', function() {
  console.log('Добавлено!');
});
