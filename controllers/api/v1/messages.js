const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const messageSchema = new Schema({
    message: String,
    sender: String,
    receiver: String,
    date: Date,
});
const Message = mongoose.model('Message', messageSchema);


const getAllMessages = (req, res) => {
    Message.find({}, (err, messages) => {
        if(!err) {
            res.json({
                "status": "success",
                "data": {
                    "messages": messages
                }
            });
        }
    })
}

const createMessage = (req, res) => {
    let message = new Message();
    message.message = "this is a message";
    message.sender = "Max";
    message.receiver = "Jan";
    message.date = new Date();
    message.save((err, message) => {
        if (!err) {
            res.json({
                "status": "success",
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
                "data": {
                    "message": message
                }
            });
        }
    });
}

const updateMessage = (req, res) => {
    Message.findById(req.params.id, (err, message) => {
        if (!err) {
            message.message = req.body.message;
            message.sender = req.body.sender;
            message.receiver = req.body.receiver;
            message.date = req.body.date;
            message.save((err, message) => {
                if (!err) {
                    res.json({
                        "status": "success",
                        "data": {
                            "message": message
                        }
                    });
                }
            });
        }
    });
}

const deleteMessage = (req, res) => {
    Message.findByIdAndRemove(req.params.id, (err, message) => {
        if (!err) {
            res.json({
                "status": "success",
                "data": {
                    "message": message
                }
            });
        }
    });
}

module.exports.getAllMessages = getAllMessages;
module.exports.createMessage = createMessage;
module.exports.getMessageById = getMessageById;
module.exports.updateMessage = updateMessage;
module.exports.deleteMessage = deleteMessage;