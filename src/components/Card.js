class Card {
  constructor(data, cardSelector, handleCardClick, handleCardDelite, handleCardLike, userId) { //Конструктор карточки
    this._title = data.name;
    this._image = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._owner = data.owner;
    this._createdAt = data.createdAt;
    this._cardSelector = cardSelector;
    this._handlerCardClick = handleCardClick;
    this._handlerCardDelite = handleCardDelite;
    this._handlerCardLike = handleCardLike;
    this._userId = userId;
  }

  _getTemplate() {  //Получение шаблона карточки
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    this._templateImage = cardElement.querySelector('.element__image');
    this._templateTitle = cardElement.querySelector('.element__title');
    this._templateLikes = cardElement.querySelector('.element__likes');
    this._likeButton = cardElement.querySelector('.button_type_like');
    return cardElement;
  }

  handleLikeClick(likes) { //Метод активации лайка
    this._likes = likes;
    this._likeButton.classList.toggle('button_active');
    this._templateLikes.textContent = this._likes.length;
  }

  handleDeleteClick() { //Метод удаления карточки с картинкой
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() { //Установка слушателей событий на карточке
    const likeButton = this._element.querySelector('.button_type_like');
    const deliteButton = this._element.querySelector('.button_type_delete');
    const openButton = this._element.querySelector('.button_type_image');

    likeButton.addEventListener('click', () => {
      this._handlerCardLike(this);
    });
    if (this._owner._id === this._userId) {
      deliteButton.addEventListener('click', () => {
        this._handlerCardDelite(this);
      });
    } else {
      deliteButton.remove();
    }
    deliteButton.addEventListener('click', () => {
      this._handlerCardDelite(this);
    });
    openButton.addEventListener('click', () => {
      this._handlerCardClick(this._image, this._title);
    });
  }

  generateCard() { //Генерация DOM-элемента карточки
    this._element = this._getTemplate();
    this._setEventListeners();
    this._templateImage.src = this._image;
    this._templateImage.alt = this._title;
    this._templateTitle.textContent = this._title;
    this._templateLikes.textContent = this._likes.length;
    if (this._likes.some((visitor) => { return this._userId === visitor._id; })) {
      this._likeButton.classList.toggle('button_active');
    }
    return this._element;
  }

  getId() { //Получить id карточки
    return this._id;
  }
}

export { Card };
