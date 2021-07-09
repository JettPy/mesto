class UserInfo {
  constructor({ nameSelector, statusSelector, avatarSelector }) { //Констуктор класса данных пользователя
    this._nameElement = document.querySelector(nameSelector);
    this._statusElement = document.querySelector(statusSelector);
    this._avatarElement = document.querySelector(avatarSelector);
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

  setUserAvatar(avatar) { //Метод установки нового аватара пользователя
    this._avatarElement.src = avatar;
  }

  getId() { //Получить id пользователя
    return this._id;
  }

  setId(id) { //Установить id пользователя
    this._id = id;
  }
}

export { UserInfo };
