const express = require('express');
const router = express.Router();
const messagesController = require('../../../controllers/api/v1/messages');

router.get('/', messagesController.getAllMessages);

router.post("/", messagesController.createMessage);

module.exports = router;