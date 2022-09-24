const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  password: String,
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;
