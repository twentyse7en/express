const Joi = require('joi');

const createTopicSchema = Joi.object({
  topicName: Joi.string().trim().min(1).required().label('Topic Name'),
  boardId: Joi.number().integer().required().label('Board ID'),
});

module.exports = {
    createTopicSchema
};