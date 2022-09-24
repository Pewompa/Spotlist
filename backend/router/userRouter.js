const express = require('express');
const userRouter = express.Router();
const controller = require('../controller/userController');

// listRouter.get('/users/:userid/lists', controller);
// listRouter.post('/users/:userid/lists/add', controller);

// listRouter.get('/users/:userid/lists/:listid/songs', controller);
// listRouter.post('/users/:userid/lists/:listid/songs/add', controller);

userRouter.post('/users/add', controller.addUsers);
userRouter.get('/users', controller.getUsers);

module.exports = userRouter;
