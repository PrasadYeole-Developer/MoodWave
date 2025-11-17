const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: String,
  artist: String,
  audioFile: String,
  mood: String,
});

module.exports = songSchema;
