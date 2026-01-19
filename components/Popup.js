export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popup.querySelector(".popup__close");
    console.log(this._popup);
  }

  open() {
    this._popup.classList.add("popup_visible");
    console.log("pop up open method.");
  }

  close() {
    this._popup.classList.remove("popup_visible");
  }

  _handleEscapeClose = (evt) => {};

  setEventListeners() {
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });

    // addTodoForm.addEventListener("submit", (evt) => {
    //   evt.preventDefault();
    //   const name = evt.target.name.value;
    //   const dateInput = evt.target.date.value;
    //   // Create a date object and adjust for timezone
    //   const date = new Date(dateInput);
    //   date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    //   const id = uuidv4();
    //   const values = { name, date, id };
    //   const todo = generateTodo(values);
    //   todosList.append(todo);
    //   // closeModal(addTodoPopup);
    //   addToDoPopup.close();
    //   formValidator.resetValidation();
    // });
  }
}
