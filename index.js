const express = require('express')

const boards = require("./routes/boards.routes.js");
const topics = require("./routes/topics.routes.js");
const todos = require("./routes/todos.routes.js");

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('<h1>Hello World hi!</h1>')
})

app.use("/boards", boards);
app.use("/topics", topics);
app.use("/todos", todos);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
