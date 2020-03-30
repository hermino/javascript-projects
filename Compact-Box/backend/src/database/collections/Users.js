const mongoose = require("mongoose");

const Users = new mongoose.Schema({
    email: String,
    senha: String,
  });

  module.exports = mongoose.model("Users", Users);