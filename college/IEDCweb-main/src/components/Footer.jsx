import React from "react";
import FacebookIcon from "../assets/icons8-facebook.svg";
import TwitterIcon from "../assets/icons8-twitter.svg";
import InstagramIcon from "../assets/icons8-instagram.svg";
import ContactUs1 from "./ContactUs1";

import "./Footer.css"; // Footer specific styles

function Footer() {
  return (
    <footer className="footer">
      <div className="grid-container">
        <div className="column-left">
          <ContactUs1 />
          <div className="container1">
            <p>&copy; 2024 All rights reserved | This Website is made by Sumit Kumar Das and team </p>
            <ul className="social-links">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={FacebookIcon} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={TwitterIcon} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img src={InstagramIcon} alt="Instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="column-right">
          {/* If there are any other contents in the right column, add them here */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
