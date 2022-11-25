const getAllMessages = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "messages": []
        }
    });
}

const createMessage = (req, res) => {
    res.json({
        "status": "success",
        "data": {
            "message": "Message received"
        }
    });
}

module.exports.getAllMessages = getAllMessages;
module.exports.createMessage = createMessage;