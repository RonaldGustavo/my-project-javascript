import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/home";
import Login from "./component/login";
import Register from "./component/register";
import { auth } from "./config/firebase";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // tes connect firebase
    console.log(auth);
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
