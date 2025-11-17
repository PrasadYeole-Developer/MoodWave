const Song = require("../Models/song.model");
const { uploadFile } = require("../Services/storage.service");

const uploadSong = async (req, res) => {
  if (!req.file)
    return res.status(400).json({ error: "Audio file is required" });
  const uploadedFile = await uploadFile(req.file);
  const song = await Song.create({
    title: req.body.title,
    artist: req.body.artist,
    audioFile: uploadedFile.url,
    mood: req.body.mood,
  });
  res.status(201).json({
    message: "Song created successfully",
    song: song,
  });
};

const getSongs = async (req, res) => {
  const { mood } = req.query;
  const songs = await Song.find({
    mood: mood,
  });
  res.status(200).json({
    message: "Songs fetched successfully",
    songs: songs,
  });
};

module.exports = { uploadSong, getSongs };
