import React, { useState } from "react";

const SongList = () => {
  const [songs, setSongs] = useState([
    {
      title: "song_title",
      artist: "song_artist",
      url: "...",
    },
    {
      title: "song_title",
      artist: "song_artist",
      url: "...",
    },
    {
      title: "song_title",
      artist: "song_artist",
      url: "...",
    },
    {
      title: "song_title",
      artist: "song_artist",
      url: "...",
    },
  ]);
  const [play, setPlay] = useState(true);
  const handlePlay = () => {
    setPlay(!play);
  };
  return (
    <div>
      <h3 className="font-bold text-[1rem]">Recommended Tracks</h3>
      {songs.map((song, idx) => (
        <div key={idx} className="my-4 w-full">
          <div className="flex items-center justify-between">
            <div className="left">
              <p>{song.title}</p>
              <p>{song.artist}</p>
            </div>
            <div
              className="cursor-pointer transition-all hover:scale-110 duration-150 active:scale-0 active:duration-500"
              onClick={handlePlay}
            >
              {play ? (
                <i className="ri-play-large-line"></i>
              ) : (
                <i className="ri-pause-large-line"></i>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongList;
