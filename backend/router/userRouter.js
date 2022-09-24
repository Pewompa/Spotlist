const express = require('express');
const userRouter = express.Router();
const controller = require('../controller/userController');

userRouter.post('/users/add', controller.addUsers);
userRouter.get('/users/:username/:password', controller.getUser);
userRouter.get('/users/', controller.getAllUsers);

module.exports = userRouter;
