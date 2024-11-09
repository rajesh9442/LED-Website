import React, { useRef } from 'react';
import './ContactUs.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission

    emailjs.sendForm(
      'service_jhut73k',      // Your EmailJS Service ID
      'template_yx9xf5e',     // Your EmailJS Template ID
      form.current,
      'sBcGkVKh97hiZmcY9'     // Your EmailJS User ID or Public Key
    )
    .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
    })
    .catch((error) => {
        console.log(error.text);
        alert("Failed to send message.");
    });
  };

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
              <p>+1-414-539-4006</p>
              <p>+1-414-627-0979</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><i className="fa fa-envelope" aria-hidden="true"></i></span>
            <div className="contact-info">
              <h2>Email</h2>
              <p>brightworldled@gmail.com</p>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Contact Form</h2>
          <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="to_name" value="Bright World" /> {/* Set recipient name */}
    
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="from_name" required /> {/* Name matches template */}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="user_email" required /> {/* Email matches template */}
            </div>
          </div>
    
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input type="tel" id="mobile" name="user_mobile" /> {/* Phone number matches template */}
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="user_subject" /> {/* Optional subject */}
            </div>
          </div>
    
          {/* Updated "Message" Field */}
          <div className="form-group form-group-fullwidth">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required /> {/* Message matches template */}
          </div>
    
          <button type="submit">Send</button>
          </form>
        </div>
      </div>

      {/* Google Map */}
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
