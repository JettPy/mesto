class Api {
  constructor(options) {
    this._cardsUrl = options.baseUrl + '/cards';
    this._userUrl = options.baseUrl + '/users/me';
    this._likesUrl = options.baseUrl + '/cards/likes/';
    this._headers = options.headers;
  }

  _checkResponse(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(`Ошибка: ${result.status}`);
  }

  getUserInfo() { //Загрузка информации о пользователе с сервера
    return fetch(this._userUrl, {
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  getInitialCards() { //Загрузка карточек с сервера
    return fetch(this._cardsUrl, {
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  updateUserInfo(name, about) { //Редактирование профиля
    return fetch(this._userUrl, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then(this._checkResponse);
  }

  addCard(name, link) { //Добавление новой карточки
    return fetch(this._cardsUrl, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(this._checkResponse);
  }

  deleteCard(cardId) { //Удаление карточки
    return fetch(this._cardsUrl + '/' + cardId, {
      method: "DELETE",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  like(cardId) { //Постановка лайка
    return fetch(this._likesUrl + cardId, {
      method: "PUT",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  dislike(cardId) { //Снятие лайка
    return fetch(this._likesUrl + cardId, {
      method: "DELETE",
      headers: this._headers
    })
      .then(this._checkResponse);
  }

  updateAvatar(avatar) { //Обновление аватара пользователя
    return fetch(this._userUrl + '/avatar', {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
      .then(this._checkResponse);
  }
}

export { Api };
