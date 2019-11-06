const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

let todos = [];

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/todos", function (req, res) {
  res.json(todos);
});

app.get("/todos/:id", function (req, res) {
  const idStr = req.params.id || 0;
  const id = parseInt(idStr, 10);
  if (id === 0) {
    return res.sendStatus(404);
  }

  const todo = todos.find(function (todo) {
    return todo.id === id;
  });
  if (!todo) {
    return res.sendStatus(404);
  }

  res.json(todo);
});

app.post("/todos", function (req, res) {
  const { text } = req.body;
  const todo = { id: Date.now(), text, done: false };
  todos.push(todo);
  res.json(todo);
});

app.patch("/todos/:id", function (req, res) {
  const idStr = req.params.id || 0;
  const id = parseInt(idStr, 10);
  if (id === 0) {
    return res.sendStatus(404);
  }

  const todo = todos.find(function (todo) {
    return todo.id === id;
  });
  if (!todo) {
    return res.sendStatus(404);
  }

  todo.done = !todo.done;

  res.json(todo);
});

app.delete("/todos/:id", function (req, res) {
  const idStr = req.params.id || 0;
  const id = parseInt(idStr, 10);
  if (id === 0) {
    return res.sendStatus(404);
  }

  todos = todos.filter(function (todo) {
    return todo.id !== id;
  });

  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server started at 3000");
});