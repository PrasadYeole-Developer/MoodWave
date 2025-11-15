import React from "react";

const Header = () => {
  return (
    <header
      className="w-full select-none bg-white text-[#1b1b1b] flex gap-1 items-center py-2 px-4 border-b border-gray-200"
    >
      <img src="/moodwaveicon.png" alt="MoodWave Icon" className="w-[2rem]" />
      <h3 className="font-bold text-[0.8rem]">MoodWave</h3>
    </header>
  );
};

export default Header;
