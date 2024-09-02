import React from 'react';
import './ContactUs.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure this is imported for Font Awesome

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h2 className="contact-us-heading">Contact Us</h2>
      <div className="contact-us-content">
        <div className="contact-details">
          <div className="contact-item">
            <span className="contact-icon"><i className="fa fa-map-marker" aria-hidden="true"></i></span>
            <div className="contact-info">
              <h2>Address</h2>
              <p>730 W. Historical Mitchell St., Milwaukee, USA</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><i className="fa fa-phone" aria-hidden="true"></i></span>
            <div className="contact-info">
              <h2>Phone</h2>
              <p>+1-414-627-0979</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
            <div className="contact-info">
              <h2>Email</h2>
              <p>contact@brightworld.com</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Form</h2>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input type="tel" id="mobile" name="mobile" />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" />
          </div>
          <button type="submit">Send</button>
        </div>
      </div>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2916.422286930551!2d-87.92310308453104!3d43.002673979148116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88051a5d2a0bdb57%3A0xa5fa5df0601bca8!2s730%20W%20Historic%20Mitchell%20St%2C%20Milwaukee%2C%20WI%2053204%2C%20USA!5e0!3m2!1sen!2sin!4v1693493454352!5m2!1sen!2sin"
          title="Google Maps Location"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
