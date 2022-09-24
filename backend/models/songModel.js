const mongoose = require('mongoose');
const songSchema = new mongoose.Schema({
  artist: String,
  title: String,
});

const songModel = mongoose.model('users', songSchema);
module.exports = songModel;
