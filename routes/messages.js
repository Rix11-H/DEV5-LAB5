const express = require('express');
const messageRouter = express.Router();
const messagesController = require('../controllers/messagesController');

messageRouter.get('/', messagesController.getAllMessages);
messageRouter.get('/:id', messagesController.getOneMessage);
messageRouter.post('/', messagesController.createMessage);
messageRouter.put('/:id', messagesController.updateMessage);
messageRouter.delete('/:id', messagesController.deleteMessage);
messageRouter.get('/user/:name', messagesController.getMessagesByUser);

module.exports = messageRouter;