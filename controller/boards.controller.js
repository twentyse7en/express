const { Boards } = require("../models/model")

const getAllBoards = async (req, res) => {
    try {
        const allBoards = await Boards.findAll();
        res.json(allBoards);
    } catch (error) {
        console.log('Error fetching boards:', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

const createBoard = async (req, res) => {
    const { boardName } = req.body;

    try {
        const newBoard = await Boards.create({
            boardName
        });
        res.status(201).json(newBoard);
    } catch (error) {
        console.log('Error creating board: ', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

module.exports = {
    getAllBoards,
    createBoard
}