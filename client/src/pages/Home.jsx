import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import Activity from "../components/Activity";

function Home() {
  return (
    <React.StrictMode>
      <NavBar />
      <Hero />
      <About />
      <Activity />
    </React.StrictMode>
  );
}

export default Home;
