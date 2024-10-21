import React from "react";
import "./Events.css";
import E1 from "../assets/E1.jpg"; // Conferences
import E2 from "../assets/E2.png"; // Workshops
import E3 from "../assets/E3.jpg"; // Seminars
import E4 from "../assets/E4.jpg"; // Webinars

function Events() {
  return (
    <section className="events" id="events">
      <div className="container">
        <h2>Events & Training</h2>
        <p>We host a range of events and training programs in AI and related fields.</p>
        <div className="events-cards">
          <div className="card">
            <img src={E1} alt="Conferences" className="card-image" />
            <h3>Conferences</h3>
            <p>
              Upcoming conferences organized or co-organized by innovAI, featuring the latest advancements in AI research.
            </p>
          </div>
          <div className="card">
            <img src={E2} alt="Workshops" className="card-image" />
            <h3>Workshops</h3>
            <p>
              Hands-on training and workshops on Remote Sensing, AI, and Machine Learning, providing practical insights and skills.
            </p>
          </div>
          <div className="card">
            <img src={E3} alt="Seminars" className="card-image" />
            <h3>Seminars</h3>
            <p>
              Guest lectures and seminars on cutting-edge research topics by experts in the AI community.
            </p>
          </div>
          <div className="card">
            <img src={E4} alt="Webinars" className="card-image" />
            <h3>Webinars</h3>
            <p>
              Online webinars covering various topics like Remote Sensing, AI, and Machine Learning, accessible from anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
