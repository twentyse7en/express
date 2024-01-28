const express = require("express");
const router = express.Router();

const { getAllTodos, createTodo, updateTodo, deleteTodo } = require("../controller/todos.controller");

// move function to controller
router.get("/", getAllTodos);
router.post("/", createTodo);
router.put('/:todoId', updateTodo);
router.delete('/:todoId', deleteTodo);

module.exports = router;
