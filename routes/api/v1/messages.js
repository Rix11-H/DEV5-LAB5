const express = require('express');
const router = express.Router();
const messagesController = require('../../../controllers/api/v1/messages');

router.get('/', messagesController.getAllMessages);
router.post("/", messagesController.createMessage);
router.get('/:id', messagesController.getMessageById);
router.put('/:id', messagesController.updateMessage);
router.delete('/:id', messagesController.deleteMessage);

module.exports = router;