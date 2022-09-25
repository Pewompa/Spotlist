const mongoose = require('mongoose');
const songListSchema = new mongoose.Schema({
  name: String,
  listId: String,
  userId: String,
  songs: {
    type: Array,
    required: false,
  },
});

const songListModel = mongoose.model('songlists', songListSchema);
module.exports = songListModel;
