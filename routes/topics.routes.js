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
router.get("/:boardId/topic/:topicId", function (req, res) {
    console.log(req.params);
    pool.query('Select * from topics')
    .then(topics => {
      res.send(topics.rows);
    })
});

router.post('/', function(req, res) {
  console.log(req);
  res.send(200);
})

module.exports = router;
