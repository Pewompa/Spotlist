const SongListModel = require('../models/songListModel');

async function getPlaylists(req, res) {
  try {
    const data = await SongListModel.find();
    res.status(201);
    res.send(data);
  } catch {
    res.status(500);
  }
}

async function addPlaylist(req, res) {
  try {
    const newUser = new SongListModel({
      name: req.body.name,
      listId: req.params.userid,
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

module.exports = { getPlaylists, addPlaylist };
