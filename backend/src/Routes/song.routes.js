const express = require("express");
const multer = require("multer");
const { uploadSong } = require("../Controllers/song.controllers");
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("audioFile"), uploadSong);

module.exports = router;
