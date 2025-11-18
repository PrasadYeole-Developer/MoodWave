const mongoose = require("mongoose");
const songSchema = require("../Schemas/song.schema");

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
