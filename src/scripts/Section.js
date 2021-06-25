class Section {
  constructor({ items, renderer }, containerSelector) { //Конструктор секции
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _clear() { //Очистка контейнера секции
    this._container.innerHTML = '';
  }

  renderItems() { //Отображение элементов секции
    this._clear();
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }

  addItem(element) { //Добавление элементов секции в контейнер
    this._container.prepend(element);
  }
}

export { Section };
