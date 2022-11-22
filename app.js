const express = require('express');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const messagesRouter = require('./routes/messages');

mongoose.connect('mongodb://localhost:27017/dev5-chat');
const app = express();
const port = 3000;

// view engine setup
app.set('view engine', 'jade');

app.use(express.json());

app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/v1/messages', messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});

