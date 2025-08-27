import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css"; // for styling

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ri1wg3u",   
        "template_s4leizm",  
        form.current,
        "Vc3C25fK1ukBMvtfl"       
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you. Send us a message below!</p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <input type="text" name="user_name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="user_email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="send-btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
