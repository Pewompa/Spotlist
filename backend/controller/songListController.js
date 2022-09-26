const SongListModel = require('../models/songListModel');

async function getPlaylists(req, res) {
  try {
    const data = await SongListModel.find();
    res.status(200);
    res.send(data);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

async function addPlaylist(req, res) {
  try {
    const newUser = new SongListModel({
      name: req.body.name,
      listId: req.body.listId,
      userId: req.params.userid,
      songs: req.body.songs,
    });
    await newUser.save();
    res.status(201);
    res.send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}
async function deletePlaylist(req, res) {
  try {
    const data = await SongListModel.deleteOne({ listId: req.params.id });
    res.status(200);
    res.send(data);
  } catch (error) {
    res.status(500);
    console.log(error);
  }
}

module.exports = { getPlaylists, addPlaylist, deletePlaylist };
