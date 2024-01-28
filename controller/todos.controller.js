const { Todos } = require('../models/model');
const { createTodoSchema, updateTodoSchema } = require('../validators/todosValidators');

const getAllTodos = async (req, res) => {
    try {
        const allTodos = await Todos.findAll();
        res.json(allTodos);
      } catch (error) {
        // TODO: logging
        console.error('Error fetching todos:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}

const createTodo = async (req, res) => {
    const { todoTitle, todoDescription, todoStatus, topicId } = req.body;

    const { error } = createTodoSchema.validate(req.body);
    if (error) {
        console.log('error', error);
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
      const newTodo = await Todos.create({
        todoTitle,
        todoDescription,
        todoStatus,
        topicId,
      });
  
      res.status(201).json(newTodo);
    } catch (error) {
      console.error('Error creating todo:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
}

const updateTodo = async (req, res) => {
    const { todoId } = req.params;
    const { todoStatus, todoDescription, todoTitle, topicId } = req.body;

    const { error } = updateTodoSchema.validate({...req.body, ...req.params});
    if (error) {
        console.log('error', error);
        return res.status(400).json({ error: error.details[0].message });
    }

  try {
    const existingTodo = await Todos.findByPk(todoId);
    if (!existingTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }

    await existingTodo.update({
      todoTitle,
      todoDescription,
      todoStatus,
      topicId,
    });

    res.json(existingTodo);
  } catch (error) {
    console.error('Error updating todo:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// TODO: yet to implement
const deleteTodo = (req, res) => {
    res.sendStatus(200);
}

module.exports =  {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo
}