import React from "react";
import FacialExpression from "./components/FacialExpression";
import Header from "./components/Header";
import Layout from "./components/Layout";
import SongList from "./components/SongList";

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <FacialExpression />
        <SongList />
      </Layout>
    </>
  );
};

export default App;
