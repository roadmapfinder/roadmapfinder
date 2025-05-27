"use client";
import React, { useState, useEffect } from "react";
import Home from "./Home/home";
import Splash from "./Splash/page";
import Footer from "./Footer/page";


const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash and show home after 1.5 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <Splash />}
      <div
        className={`transition-opacity duration-500 ${
          showSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        <Home />
        <Footer />
      </div>
    </>
  );
};

export default App;