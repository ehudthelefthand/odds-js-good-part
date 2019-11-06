document.addEventListener("DOMContentLoaded", function () {

  const root = document.getElementById("root");
  TodoForm.config({ storage: Storage });
  TodoForm.render(root);

});