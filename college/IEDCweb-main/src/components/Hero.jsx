import React, { useEffect, useState } from "react";
import "./Hero.css";
import bloomVideo from "../assets/bloom.mp4";
import gloomVideo from "../assets/gloom.mp4"; // Mobile video
import logo from "../assets/logo.png";
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import a4 from "../assets/a4.jpg";
import a5 from "../assets/a5.jpg";
import a6 from "../assets/a6.jpg";
import a7 from "../assets/a7.jpg";
import a8 from "../assets/a8.jpg";
import a9 from "../assets/a9.jpg";
import a10 from "../assets/a10.jpg";

function Hero() {
  const [typedText, setTypedText] = useState("");
  const [videoSource, setVideoSource] = useState(bloomVideo); // Track video source
  const [isMobile, setIsMobile] = useState(false); // Detect if mobile
  const subtitle = "Unlocking the potential of Artificial Intelligence.";

  // Handle typing animation
  useEffect(() => {
    let index = 0;
    let tempText = "";

    const typeText = () => {
      if (index < subtitle.length) {
        if (subtitle[index] === "<") {
          const closingTagIndex = subtitle.indexOf(">", index);
          tempText += subtitle.slice(index, closingTagIndex + 1);
          setTypedText(tempText);
          index = closingTagIndex + 1;
        } else {
          tempText += subtitle[index];
          setTypedText(tempText);
          index++;
        }
      } else {
        clearInterval(typeInterval);
      }
    };

    const typeInterval = setInterval(typeText, 100);
    return () => clearInterval(typeInterval);
  }, [subtitle]);

  // Scroll reveal logic for images
  useEffect(() => {
    const images = document.querySelectorAll(".collage-image");

    const revealImages = () => {
      images.forEach((image) => {
        image.classList.add("reveal");
      });
    };

    const timer = setTimeout(revealImages, 700);
    return () => clearTimeout(timer);
  }, []);

  // Detect if device is mobile and switch video source
  useEffect(() => {
    const isMobileDevice = () => {
      return (
        /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
          navigator.userAgent
        ) || window.innerWidth <= 768
      );
    };

    const handleResize = () => {
      if (isMobileDevice()) {
        setVideoSource(gloomVideo); // Mobile video
        setIsMobile(true);
      } else {
        setVideoSource(bloomVideo); // Desktop video
        setIsMobile(false);
      }
    };

    handleResize(); // Check on initial load
    window.addEventListener("resize", handleResize); // Update on window resize

    return () => window.removeEventListener("resize", handleResize); // Clean up the event listener
  }, []);

  return (
    <section className="hero">
      <video
        className="video-bg"
        src={videoSource}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="text-logo-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logon" />
        </div>
        <div className="text-container">
          <p
            className="subtitle"
            dangerouslySetInnerHTML={{ __html: typedText }}
          />
        </div>
      </div>
      <div className="image-collage">
        <div className="ai-pattern">
          <div className="a-triangle">
            <img src={a1} alt="A1" className="collage-image" />
            <div className="row">
              <img src={a2} alt="A2" className="collage-image" />
              <img src={a3} alt="A3" className="collage-image" />
            </div>
            <div className="row">
              <img src={a4} alt="A4" className="collage-image" />
              <img src={a5} alt="A5" className="collage-image" />
              <img src={a6} alt="A6" className="collage-image" />
            </div>
          </div>
          <div className="i-column">
            <img src={a7} alt="I1" className="collage-image" />
            <img src={a8} alt="I2" className="collage-image" />
            <img src={a9} alt="I3" className="collage-image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
