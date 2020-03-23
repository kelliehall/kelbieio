const mongoose = require('mongoose');

const blogpost = mongoose.Schema({
  userID: String,
  datePosted : Date,
  content: String
});

module.exports = mongoose.model('blogpost', blogpost);