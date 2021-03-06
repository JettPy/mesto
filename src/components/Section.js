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
    for (let i = this._renderedItems.length - 1; i >= 0; --i) {
      this.addItem(this._renderedItems[i]);
    }
  }

  addItem(element) { //Добавление элементов секции в контейнер
    this._container.prepend(this._renderer(element));
  }
}

export { Section };
