const express = require('express');
const songRouter = express.Router();
const controller = require('../controller/songController');

// songRouter.get('/users/:userid/lists', controller);
// songRouter.post('/users/:userid/lists/add', controller);

// songRouter.get('/users/:userid/lists/:listid/songs', controller);
// songRouter.post('/users/:userid/lists/:listid/songs/add', controller);

module.exports = songRouter;
