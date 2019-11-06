const Storage = function () {
  const events = {};
  const todos = [];

  function pub(message, data) {
    const fns = events[message];
    if (fns) {
      fns.forEach(function (fn) {
        fn(data);
      });
    }
  }

  function sub(message, fn) {
    if (Object.hasOwnProperty(events, message)) {
      events[message].push(fn);
    } else {
      events[message] = [fn];
    }
  };

  function addTodo(text) {
    const item = { id: Date.now(), text, done: false };
    todos.push(item);
    pub("todo-added", item);
  }

  function listTodo() {
    return todos;
  }

  return {
    pub,
    sub,
    addTodo,
    listTodo,
  }
}();