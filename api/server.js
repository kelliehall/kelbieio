const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const connection = mongoose.connection;
const cors = require('cors');

const config = require('./config/config');

const auth = require('./routes/auth');
const blog = require('./routes/blog');

mongoose.connect(`mongodb://127.0.0.1:27017/${config.db.table}`, { useNewUrlParser: true });

app.use(bodyparser.json());
app.use(cors());

app.use('/auth', auth);
app.use('/blog', blog);

const server = app.listen(3001, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Listening on  http://${host}:${port}`);
});

