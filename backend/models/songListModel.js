const mongoose = require('mongoose');
const songListSchema = new mongoose.Schema({
  name: String,
  listId: String,
  songs: {
    type: Array,
    required: false,
  },
});

const songListModel = mongoose.model('songList', songListSchema);
module.exports = songListModel;
