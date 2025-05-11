"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import logo from "../Images/logo.png";

const Splash = () => {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // Set a timer to redirect after 3 seconds
    const timer = setTimeout(() => {
      setRedirect(true);
    }, 1500);

    // Clean up the timer if component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center">
      <Image src={logo} alt="Logo" className="w-80 h-100 object-contain" />
    </div>
  );
};

export default Splash;
