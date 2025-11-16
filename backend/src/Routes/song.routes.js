const express = require("express");
const multer = require("multer");
const router = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

router.post("/", upload.single("audioFile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  console.log(req.file.buffer);
  res.status(201).json({
    message: "Song created successfully",
    song: req.body,
  });
});

module.exports = router;
