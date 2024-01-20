const express = require("express");
const router = express.Router();

// TODO: should this pool created once?
const Pool = require('pg').Pool;
 
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'taskboard',
    password: 'postgres',
    port: 5432
});

// move function to controller
router.get("/", function (req, res) {
    pool.query('Select * from todos')
    .then(todos => {
      res.send(todos.rows);
    })
});

module.exports = router;
