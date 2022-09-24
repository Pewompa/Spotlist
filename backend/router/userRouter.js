const express = require('express');
const userRouter = express.Router();
const controller = require('../controller/userController');

userRouter.post('/users/add', controller.addUsers);
userRouter.get('/users', controller.getUsers);

module.exports = userRouter;
