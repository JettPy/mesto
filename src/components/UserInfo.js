class UserInfo {
  constructor({ nameSelector, statusSelector }) { //Констуктор класса данных пользователя
    this._nameElement = document.querySelector(nameSelector);
    this._statusElement = document.querySelector(statusSelector);
  }

  getUserInfo() { //Метод получения данных пользователя
    const name = this._nameElement.textContent;
    const status = this._statusElement.textContent;
    return { name: name, status: status };
  }

  setUserInfo({ name, status }) { //Метод установки новых данных пользователя
    this._nameElement.textContent = name;
    this._statusElement.textContent = status;
  }
}

export { UserInfo };
