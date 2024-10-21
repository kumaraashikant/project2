import React from "react";
import "./ContactUs.css";

function ContactUs1() {
  return (
    <section className="contact-us full-width-section" id="contact-us">
      <div className="container">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, feel free to reach out to us.</p>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>

          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs1;
