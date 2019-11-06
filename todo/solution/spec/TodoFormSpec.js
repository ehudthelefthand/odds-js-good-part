describe("TodoForm", function () {
  let container;

  beforeAll(function () {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(function () {
    container.innerHTML = "";
  });

  describe("#render", function () {
    it("should render form on page", function () {
      // init component
      TodoForm.render(container);
      // interact
      // no interact

      // assert
      const todoForm = document.getElementById("todo-form");
      const todoText = document.getElementById("todo-text");
      const todoAdd = document.getElementById("todo-add");
      expect(todoForm).not.toBeNull();
      expect(todoText).not.toBeNull();
      expect(todoAdd).not.toBeNull();
    });
  });

  describe("#submit", function () {
    it("should publish 'todo-added' with new todos state", function () {
      // init component
      TodoForm.config({ storage: Storage });
      TodoForm.render(container);

      // assert
      Storage.sub("todo-added", function (todo) {
        expect(Storage.listTodo().length).toEqual(1);
        expect(todo.text).toEqual("test");
      });

      // interact
      document.getElementById("todo-text").value = "test";
      document.getElementById("todo-add").click();
    });
  });
});