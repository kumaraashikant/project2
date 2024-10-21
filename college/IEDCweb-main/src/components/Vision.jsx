import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal"; // Import ScrollReveal
import "./Vision.css"; // Specific CSS for Vision section
import Research1 from "./Research1";
import Faculty1 from "./Faculty1";
import innovationImg from "../assets/V1.png"; // Image for Innovation
import collaborationImg from "../assets/V2.png"; // Image for Collaboration
import impactImg from "../assets/V3.png"; // Image for Impact

function Vision() {
  useEffect(() => {
    // Initialize ScrollReveal and add animation for elements
    ScrollReveal().reveal('.card', {
      duration: 1000,   // Animation duration (1 second)
      distance: '50px', // Distance for sliding effect
      easing: 'ease-in-out', // Animation easing
      origin: 'bottom', // Slide from the bottom
      reset: true, // Animation occurs every time you scroll down to the element
    });
  }, []);

  return (
    <section className="vision" id="vision">
      <div className="container">
        <h2>Our Vision</h2>
        <p>
          To leverage cutting-edge AI to address global challenges and create a
          positive impact.
        </p>
        <div className="vision-cards">
          <div className="card">
            <img src={innovationImg} alt="Innovation" className="card-image" />
            <h3>Innovation</h3>
            <p>We drive to push the boundaries of research and development.</p>
          </div>
          <div className="card">
            <img src={impactImg} alt="Impact" className="card-image" />
            <h3>Impact</h3>
            <p>
              Our goal is to use AI to create meaningful solutions for societal
              issues.
            </p>
          </div>
          <div className="card">
            <img src={collaborationImg} alt="Collaboration" className="card-image" />
            <h3>Collaboration</h3>
            <p>
              We foster partnerships with leading institutions and organizations
              to amplify our reach.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Research1 />
      </div>
      <div>
        <Faculty1 />
      </div>
    </section>
  );
}

export default Vision;
