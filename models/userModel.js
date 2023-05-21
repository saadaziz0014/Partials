const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("userModel", userSchema);

module.exports = userModel;
