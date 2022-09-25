const SongListModel = require('../models/songListModel');

// async function getPlaylists(req, res) {
//   console.log('in');
//   try {
//     const data = await SongListModel.find({ _id: req.params.id });
//     console.log('in');
//     res.status(201);
//     res.send(data);
//   } catch (error) {
//     res.status(500);
//     console.log(error);
//   }
// }
async function getPlaylists(req, res) {
  try {
    const data = await SongListModel.find();
    res.status(201);
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

module.exports = { getPlaylists, addPlaylist };
