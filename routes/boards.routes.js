const express = require("express");
const router = express.Router();

const { getAllBoards, createBoard } = require("../controller/boards.controller");

router.get("/", getAllBoards);
router.post("/", createBoard);



module.exports = router;
