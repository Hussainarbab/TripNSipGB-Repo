import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand / About */}
        <div className="footer__col">
          <h2 className="footer__brand">TripNSipGB</h2>
          <p className="footer__text">
            Discover Gilgit-Baltistan with us — tours, local products, and cultural
            experiences that bring you closer to nature and tradition.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer__col">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#tours">Our Tours</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div className="footer__col">
          <h3 className="footer__title">Get in Touch</h3>
          <p className="footer__text">hussyn763@gmail.com.com</p>
          <p className="footer__text">Phone: +923168440875</p>

          <div className="footer__social">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="footer__social-btn">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="footer__social-btn">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter/X" className="footer__social-btn">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="footer__social-btn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} TripNSipGB. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
