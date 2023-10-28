import React, { useEffect } from "react";
import Navbar from "./../Components/HomeAssets/Navbar/Navbar";
import Hero from "../Components/HomeAssets/Hero/Hero";
import Main from "../Components/HomeAssets/Main/Main";

const Home = () => {
  useEffect(() => {
    document.title = "FlowView";
  });
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
    </>
  );
};

export default Home;
