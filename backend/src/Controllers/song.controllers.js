const Song = require("../Models/song.model");
const { uploadFile } = require("../Services/storage.service");

const uploadSong = async (req, res) => {
  if (!req.file)
    return res.status(400).json({ error: "Audio file is required" });
  try {
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
  } catch (err) {
    return res.status(500).json({ error: "Upload failed", details: err });
  }
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

const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    if (!songs) return res.status(404).json({ message: "Songs not found" });
    res.status(200).json({
      message: "All songs fetched successfully",
      songs: songs,
    });
  } catch (err) {
    res.status(500).json({ message: "Error fetching songs", error: err });
  }
};

module.exports = { uploadSong, getSongs, getAllSongs };
