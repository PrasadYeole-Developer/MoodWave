const mongoose = require("mongoose");
const songSchema = require("../Schemas/song.schema");

const Song = mongoose.model("song", songSchema);

module.exports = Song;
