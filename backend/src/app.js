const express = require("express");
const app = express();
const songRoutes = require("./Routes/song.routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("MoodWave Backend is running");
});
app.use("/songs", songRoutes);

module.exports = app;
