const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  passaword: {
    type: String,
    required: true,
  },

  //books : We look into this whwnever we add relationship
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
