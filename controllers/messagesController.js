const Message = require('../models/message');

const getAllMessages = (req, res) => {
    const response = {
        status: "success",
        data: "Getting all messages"
    }
    res.json(response);
};

const getOneMessage = (req, res) => {};

const createMessage = (req, res) => {};

const updateMessage = (req, res) => {};

const deleteMessage = (req, res) => {};

const getMessagesByUser = (req, res) => {};


