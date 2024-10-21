import React, { useEffect, useState } from "react";
import ScrollReveal from "scrollreveal";
import Logo from "../assets/logo.png";
import "./Loading.css";

function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show loading screen for 3 seconds
    const timer = setTimeout(() => {
      const loadingElement = document.querySelector(".loading-screen");
      loadingElement.classList.add("hidden"); // Add hidden class for smooth vanish
      setTimeout(() => setIsVisible(false), 1000); // Wait for fade-out animation
    }, 3000);

    // ScrollReveal settings after loading
    ScrollReveal().reveal(".content", {
      distance: "50px",
      duration: 1000,
      delay: 500,
      origin: "bottom",
      opacity: 0,
    });

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? (
    <div className="loading-screen">
      <img src={Logo} alt="Logo" className="logo-animate" />
    </div>
  ) : (
    <div className="content">{/* The rest of your app content */}</div>
  );
}

export default Loading;
