import React from "react";
import FacialExpression from "./components/FacialExpression";
import Header from "./components/Header";
import Layout from "./components/Layout";
import SongList from "./components/SongList";
import { useState } from "react";

const App = () => {
  const [songs, setSongs] = useState([]);
  const [isDetecting, setIsDetecting] = useState(false);

  return (
    <>
      <Header />
      <Layout>
        <FacialExpression
          setSongs={setSongs}
          isDetecting={isDetecting}
          setIsDetecting={setIsDetecting}
        />
        <SongList songs={songs} isDetecting={isDetecting} />
      </Layout>
    </>
  );
};

export default App;
