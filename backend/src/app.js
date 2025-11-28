const express = require("express");
const app = express();
const songRoutes = require("./Routes/song.routes");
const cors = require("cors");

app.use(
  cors({
    origin: ["https://moodwave-one.vercel.app", "http://localhost:5173"],
  })
);
app.use(express.json());
app.set("json spaces", 4);
app.get("/", (req, res) => {
  res.send("MoodWave Backend is running");
});
app.use("/songs", songRoutes);

module.exports = app;
