const UserModel = require('../models/userModel');

async function getUsers(req, res) {
  try {
    const data = await UserModel.find();
    res.status(201);
    res.send(data);
  } catch {
    res.status(500);
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

module.exports = { addUsers, getUsers };
