const Joi = require('joi');

const createTodoSchema = Joi.object({
  todoTitle: Joi.string().trim().min(1).required().label('Todo Title'),
  todoDescription: Joi.string().allow('').trim().label('Todo Description'),
  todoStatus: Joi.boolean().label('Todo Status'),
  topicId: Joi.number().integer().required().label('Topic ID'),
});

const updateTodoSchema = Joi.object({
    todoTitle: Joi.string().trim().min(1).label('Todo Title'),
    todoDescription: Joi.string().allow('').trim().label('Todo Description'),
    todoStatus: Joi.boolean().label('Todo Status'),
    topicId: Joi.number().integer().label('Topic ID'),
    todoId: Joi.number().integer().label('Todo ID')
  });

module.exports = { createTodoSchema, updateTodoSchema };