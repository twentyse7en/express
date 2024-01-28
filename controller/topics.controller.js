const { Topics } = require("../models/model");
const { createTopicSchema } = require("../validators/topicValidators");

const getAllTopics = async (req, res) => {
    try {
        const allTopics = await Topics.findAll();
        res.json(allTopics);
    } catch (error) {
        console.log('Error fetching topic:', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

const createTopic = async (req, res) => {
    const { boardName, topicName } = req.body;

    const { error } = createTopicSchema.validate(req.body);
    if (error) {
        console.log('error', error);
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const newTopic = await Topics.create({
            boardName,
            topicName
        });
        res.status(201).json(newTopic);
    } catch (error) {
        console.log('Error creating topic: ', error);
        res.status(500).json({ error: 'Internal Server Error'});
    }
}

module.exports = {
    createTopic,
    getAllTopics
}