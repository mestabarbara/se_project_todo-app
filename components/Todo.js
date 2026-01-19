export class Todo {
  constructor(data, selector, handleCheckBoxes, handleDeleteBtn) {
    this._completed = data.completed;
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._handleCheck = handleCheckBoxes;
    this._handleDeleteBtn = handleDeleteBtn;
  }

  _setEventListeners() {
    const todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");
    todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
      this._handleDeleteBtn(this._completed);
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      this._completed = !this._completed;
      this._handleCheck(this._completed);
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    this._todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._completed;

    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoDate = this._todoElement.querySelector(".todo__date");
    const dueDate = new Date(this._data.date);
    const todoNameEl = this._todoElement.querySelector(".todo__name");
    todoNameEl.textContent = this._data.name;

    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._generateCheckboxEl();
    this._setEventListeners();

    return this._todoElement;
  }
}
