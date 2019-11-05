document.addEventListener("DOMContentLoaded", function () {

  var TODO_STORAGE_KEY = "todo-list";
  var form = document.getElementById("todo-form");
  var todo = document.getElementById("todo");
  var todoList = document.getElementById("todo-list");
  var todos = load(TODO_STORAGE_KEY);

  render();

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    todos.push(todo.value);
    save(TODO_STORAGE_KEY, todos);
    todo.value = "";
    render();
    // alert(event.target.elements[0].value);
  });

  function render() {
    todoList.innerHTML = "";
    for (var item of todos) {
      var li = todoElem(item);
      todoList.appendChild(li);
    }
  }

  function todoElem(item) {
    var text = document.createElement("span");
    text.textContent = item;
    var icon = document.createElement("span");
    icon.classList.add("fa", "fa-trash-o");
    var li = document.createElement("li");
    li.appendChild(text);
    li.appendChild(icon);
    li.classList.add("todo-item");
    return li;
  }

  function save(key, todos) {
    localStorage.setItem(key,
      JSON.stringify(todos))
  }

  function load(key) {
    var data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data);
    }
    return [];
  }

});