const mongoose = require('mongoose');
const songSchema = new mongoose.Schema({
  listId: String,
  songs: {
    type: Array,
    required: false,
  },
});

const songModel = mongoose.model('users', songSchema);
module.exports = songModel;
