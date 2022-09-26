const express = require('express');
const songRouter = express.Router();
const songController = require('../controller/songController');
const songListController = require('../controller/songListController');

// songRouter.get('/users/:id/lists', songListController.getPlaylists);
songRouter.get('/users/lists', songListController.getPlaylists);
songRouter.post('/users/:userid/lists/add', songListController.addPlaylist);
songRouter.delete(
  '/users/:name/lists/delete',
  songListController.deletePlaylist
);

songRouter.get('/users/:userid/lists/:listid/songs', songController.getSongs);
songRouter.post(
  '/users/:userid/lists/:listid/songs/add',
  songController.addSong
);
songRouter.delete('/users/:id/delete/many', songController.deleteSongs);
songRouter.delete('/users/:title/delete', songController.deleteOneSong);

module.exports = songRouter;
