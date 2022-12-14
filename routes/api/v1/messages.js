const express = require('express');
const router = express.Router();
const messagesController = require('../../../controllers/api/v1/messages');

router.get('/', messagesController.getAllMessages);
router.get('/', function(req, res, next) {
    res.render('message', { message: 'GET /api/v1/messages' });
});
  


router.post("/", messagesController.createMessage);


router.get('/:id', messagesController.getMessageById);


router.put('/:id', messagesController.updateMessage);


router.delete('/:id', messagesController.deleteMessage);


module.exports = router;