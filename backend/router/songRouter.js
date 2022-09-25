const express = require('express');
const songRouter = express.Router();
const songController = require('../controller/songController');
const songListController = require('../controller/songListController');

// songRouter.get('/users/:id/lists', songListController.getPlaylists);
songRouter.get('/users/lists', songListController.getPlaylists);
songRouter.post('/users/:userid/lists/add', songListController.addPlaylist);

songRouter.get('/users/:userid/lists/:listid/songs', songController.getSongs);
songRouter.post(
  '/users/:userid/lists/:listid/songs/add',
  songController.addSong
);

module.exports = songRouter;
