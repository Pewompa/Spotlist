const SongModel = require('../models/songModel');

async function getSongs(req, res) {
  try {
    const data = await SongModel.find({
      userId: req.params.userid,
      listId: req.params.listid,
    });
    res.status(201);
    res.send(data);
  } catch {
    res.status(500);
  }
}

async function addSong(req, res) {
  try {
    const newUser = new SongModel({
      userId: req.params.userid,
      listId: req.params.listid,
      artist: req.body.artist,
      title: req.body.title,
    });
    await newUser.save();
    res.status(201);
    res.send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

module.exports = { addSong, getSongs };
