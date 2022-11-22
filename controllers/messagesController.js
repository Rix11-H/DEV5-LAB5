const Message = require('./../models/message');

//get all messages
const getAllMessages = (req, res) => {
    const response = {
        "status": "success",
        "data": "Getting all messages"
    }
    res.json(response);
};

// get one message by id
const getOneMessage = (req, res) => {
    let id = req.params.id;
    Message.findById(id, (err, messageWithId) => {
        if (err) {
            console.log(err);
            let response = {
                "status": "error",
                "data": "Error getting message with this id " + id
            }
            res.json(response);
        } else {
            let response = {
                "status": "success",
                "data": messageWithId
            }
            res.json(response);
        }
    });
};

// post new message
const createMessage = (req, res) => {
    let name = req.body.name;
    let message = new Message();
    message.name = name;
    message.save((err, savedMessage) => {
        if (err) {
            console.log(err);
            let response = {
                "status": "error",
                "data": "Error saving message"
        }
        res.json(response);
        } else {
            let response = {
                "status": "success",
                "data": savedMessage
            }
            res.json(response);
        }
    });
}

// PUT update message
const updateMessage = (req, res) => {};

// delete one message by id
const deleteMessage = (req, res) => {};

//get one message by username
const getMessagesByUser = (req, res) => {};


module.exports.getAllMessages = getAllMessages;
module.exports.getOneMessage = getOneMessage;
module.exports.createMessage = createMessage;
module.exports.updateMessage = updateMessage;
module.exports.deleteMessage = deleteMessage;
module.exports.getMessagesByUser = getMessagesByUser;
