const mongoose = require("mongoose");

const Users = new mongoose.Schema({
    comodo: String,
    voltagem: Boolean,
    Estado: Boolean,
  });

  module.exports = mongoose.model("Users", Users);