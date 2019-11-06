const TodoForm = function () {
  let _storage;

  function config({ storage }) {
    _storage = storage;
  }

  function render(root) {
    const todoForm = document.createElement("form");
    const todoText = document.createElement("input");
    const todoAdd = document.createElement("button");

    todoForm.id = "todo-form";
    todoForm.classList.add("todo-form");
    todoForm.addEventListener("submit", function (event) {
      event.preventDefault();
      _storage.addTodo(todoText.value);
      todoText.value = "";
    });

    todoText.id = "todo-text";
    todoText.autofocus = true;
    todoText.classList.add("todo-text");

    todoAdd.textContent = "Add";
    todoAdd.id = "todo-add";
    todoAdd.classList.add("todo-add");

    todoForm.appendChild(todoText);
    todoForm.appendChild(todoAdd);
    root.appendChild(todoForm);
  }

  return {
    config,
    render,
  }
}();