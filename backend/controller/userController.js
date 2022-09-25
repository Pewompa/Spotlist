const UserModel = require('../models/userModel');

async function getUser(req, res) {
  try {
    const data = await UserModel.find({
      name: req.params.username,
      password: req.params.password,
    });
    res.status(200);
    res.send(data);
  } catch {
    res.status(404);
  }
}
async function getAllUsers(req, res) {
  try {
    const data = await UserModel.find();
    res.status(200);
    res.send(data);
  } catch {
    res.status(404);
  }
}

async function addUsers(req, res) {
  try {
    const newUser = new UserModel({
      id: req.body.id,
      name: req.body.name,
      password: req.body.password,
    });
    await newUser.save();
    res.status(201);
    res.send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
}

module.exports = { addUsers, getUser, getAllUsers };
