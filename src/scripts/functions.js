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
