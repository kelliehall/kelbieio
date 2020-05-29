const mongoose = require('mongoose');

const user = mongoose.Schema({
  username: String,
  email: String,
  role: { type: String, default: 'guest' },
  token: String,
  password: String,
  lastLogin: Date
});

module.exports = mongoose.model('user', user);
