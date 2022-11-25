const Message = require('../../../models/Message');

const getAllMessages = (req, res) => {
        if(req.query.sender) {
            Message.find({"sender": req.query.sender}, (err, messages) => {
                if (!err) {
                    res.json({
                        "status": "success",
                        "message": `Messages from ${req.query.sender} retrieved successfully`,
                        "data": {
                            "messages": messages
                        }
                    });
                }
            });
        } else {
            Message.find({}, (err, messages) => {
                if (!err) {
                    res.json({
                        "status": "success",
                        "message": "All messages retrieved successfully",
                        "data": {
                            "messages": messages
                        }
                    });
                }
            });
        }
    };

const createMessage = (req, res) => {
    let message = new Message();
    message.message = req.body.message;
    message.sender = req.body.sender;
    message.receiver = req.body.receiver;
    message.date = new Date();
    message.save((err, message) => {
        if (err) {
            res.json({
                "status": "error",
                "message": "Message not saved",
                "data": {
                    "message": message
                }
            });
        }

        if (!err) {
            res.json({
                "status": "success",
                "message": "Message is created",
                "data": {
                    "message": message
                }
            });
        }
    });
}

const getMessageById = (req, res) => {
    Message.findById(req.params.id, (err, message) => {
        if (!err) {
            res.json({
                "status": "success",
                "message": `Getting message with id = ${req.params.id}`,
                "data": {
                    "message": message
                }
            });
        }
    });
}

const updateMessage = (req, res) => {
    let messageId = req.params.id;
    Message.findOneAndUpdate({
        _id: messageId
    }, {
        "message" : req.body.message,
        "sender" : req.params.sender,
        "receiver" : req.params.receiver,
        "date" : new Date()
    }).then(message => {
        res.json({
            "status": "success",
            "message": `Message with id = ${messageId} is updated`,
            "data": {
                "message": message
            }
        });
    }).catch(err => {
        res.json(err);
    });
}

const deleteMessage = (req, res) => {
    let messageId = req.params.id;
    Message.findOneAndDelete({
        _id: messageId
    }).then(message => {
        res.json({
            "status": "success",
            "message": `Message with id = ${messageId} is deleted`,
            "data": {
                "message": message
            }
        });
    }).catch(err => {
        res.json(err);
    });
}

module.exports.getAllMessages = getAllMessages;
module.exports.createMessage = createMessage;
module.exports.getMessageById = getMessageById;
module.exports.updateMessage = updateMessage;
module.exports.deleteMessage = deleteMessage;