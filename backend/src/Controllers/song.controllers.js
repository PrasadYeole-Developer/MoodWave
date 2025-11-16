const { uploadFile } = require("../Services/storage.service");

const uploadSong = async (req, res) => {
  console.log(req.body);
  if (!req.file)
    return res.status(400).json({ error: "Audio file is required" });
  console.log(req.file);
  console.log(req.file.buffer);
  const uploadedFile = await uploadFile(req.file);
  const audioUrl = uploadedFile.url;
  console.log(audioUrl);
  res.status(201).json({
    message: "Song created successfully",
    song: uploadedFile,
  });
};

module.exports = { uploadSong };
