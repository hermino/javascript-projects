const mongoose = require("mongoose");

const Devices = new mongoose.Schema({
    identificacao: String,
    comodo: String,
    estado: Boolean,
  });

  module.exports = mongoose.model("Devices", Devices);