const express = require("express");
const multer = require("multer");
const { uploadSong, getSongs, getAllSongs } = require("../Controllers/song.controllers");
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("audioFile"), uploadSong);
router.get("/", getSongs);
router.get("/all", getAllSongs);

module.exports = router;
