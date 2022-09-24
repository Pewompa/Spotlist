const express = require('express');
const listRouter = express.Router();
const controller = require('../controller/listController');

listRouter.get('/users/:userid/lists', controller);
listRouter.post('/users/:userid/lists/add', controller);

listRouter.get('/users/:userid/lists/:listid/songs', controller);
listRouter.post('/users/:userid/lists/:listid/songs/add', controller);

module.exports = listRouter;
