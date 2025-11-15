import React from "react";
import FacialExpression from "./components/FacialExpression";
import Header from "./components/Header";
import Layout from "./components/Layout";

const App = () => {
  return (
    <>
      <Header />
      <Layout>
        <FacialExpression />
      </Layout>
    </>
  );
};

export default App;
