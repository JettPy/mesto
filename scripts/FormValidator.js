import { profilePopUp, elementAddingPopUp } from './popups.js';

const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');
const inputName = profilePopUp.querySelector('.popup__input_field_name');
const inputStatus = profilePopUp.querySelector('.popup__input_field_status');

class FormValidator {
  constructor(config, form) {
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
  }

  _showInputError(inputElement, errorMessage) { //Функция выделения невалидного поля формы
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) { //Функция скрытия невалидного поля формы
    const errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _checkInputValidity(inputElement) { //Функция проверки валидности поля формы
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() { //Функция создания оброботчиков полей формы
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    const buttonElement = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }

  _hasInvalidInput(inputList) { //Функция проверки формы на невалидность
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonState(inputList, buttonElement) { //Функция переключения состояния кнопки
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }

  enableValidation() { //Функция создания оброботчиков форм
    this._form.addEventListener('submit', function (event) {
      event.preventDefault();
    });
    this._setEventListeners();
  }

  refreshForm() { //Функция обновления полей в форме
    const saveEditButton = this._form.querySelector(this._submitButtonSelector);
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    inputName.value = profileName.textContent;
    inputStatus.value = profileStatus.textContent;
    inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState(inputList, saveEditButton);
  }
}

export { FormValidator };
