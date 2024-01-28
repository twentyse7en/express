const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const User = sequelize.define('Users', {
  userName: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

const Boards = sequelize.define('Boards', {
  boardId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  boardName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

const Topics = sequelize.define('Topics', {
  topicId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  topicName: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  boardId: {
    type: DataTypes.INTEGER,
    references: {
      model: Boards,
      key: 'boardId',
    },
  },
});

const Todos = sequelize.define('Todos', {
  todoId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  todoTitle: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  todoDescription: {
    type: DataTypes.TEXT,
  },
  todoStatus: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  topicId: {
    type: DataTypes.INTEGER,
    references: {
      model: Topics,
      key: 'topicId',
    },
  },
});


module.exports = {
  User,
  Topics,
  Boards,
  Todos
}
