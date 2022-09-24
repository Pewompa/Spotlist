const mongoose = require('mongoose');
const songSchema = new mongoose.Schema({
  userId: String,
  playlist: String,
  artist: String,
  title: String,
});

const songModel = mongoose.model('songs', songSchema);
module.exports = songModel;
