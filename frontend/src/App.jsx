import React from "react";
import FacialExpression from "./components/FacialExpression";
import Header from "./components/Header";
import Layout from "./components/Layout";
import SongList from "./components/SongList";
import { useState } from "react";

const App = () => {
  const [songs, setSongs] = useState([]);

  return (
    <>
      <Header />
      <Layout>
        <FacialExpression setSongs={setSongs} />
        <SongList songs={songs} />
      </Layout>
    </>
  );
};

export default App;
