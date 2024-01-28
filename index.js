const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config();

const sequelize = require('./models');
const boards = require("./routes/boards.routes.js");
const topics = require("./routes/topics.routes.js");
const todos = require("./routes/todos.routes.js");

const app = express()
const port = 4000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('<h1>Hello World hi!</h1>')
})

app.use("/boards", boards);
app.use("/topics", topics);
app.use("/todos", todos);

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})

