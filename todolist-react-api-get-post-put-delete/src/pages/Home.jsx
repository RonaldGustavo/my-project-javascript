import React from "react";
import Navbar from "../component/Navbar";
import Listdata from "../component/Listdata";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <Navbar />
      <Listdata />
    </div>
  );
}

export default Home;
