const SongModel = require('../models/songModel');

async function getSongs(req, res) {
  try {
    const data = await SongModel.find({ playlist: req.params.userid });
    res.status(201);
    res.send(data);
  } catch {
    res.status(500);
  }
}

async function addSong(req, res) {
  try {
    const newUser = new SongModel({
      user: req.params.userid,
      playlist: req.params.listid,
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
