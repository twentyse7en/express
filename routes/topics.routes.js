const express = require("express");
const router = express.Router();

const { createTopic, getAllTopics } = require('../controller/topics.controller')

router.get("/", getAllTopics);
router.post('/', createTopic)

module.exports = router;
