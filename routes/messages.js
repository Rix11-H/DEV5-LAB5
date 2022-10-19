const express = require('express');
const messageRouter = express.Router();
const messages = require('../controllers/messages');

router.get('/', messages.getAllMessages);
router.get('/:id', messages.getOneMessage);
router.post('/', messages.createMessage);
router.put('/:id', messages.updateMessage);
router.delete('/:id', messages.deleteMessage);
router.get('/user/:name', messages.getMessagesByUser);

module.exports = messageRouter;