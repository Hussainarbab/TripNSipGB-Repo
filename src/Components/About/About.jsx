import React from "react";
import "./About.css";
import { FaMountain, FaMapMarkedAlt, FaAppleAlt } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left side text */}
        <div className="about-text">
          <h1>
            Discover <span>TripNSipGB</span> 🌍
          </h1>
          <p>
            Welcome to <b>TripNSipGB</b> – your gateway to the heart of 
            <span className="highlight"> Gilgit-Baltistan</span>.  
            From the mighty <b>Karakoram mountains</b> 🏔️ to the breathtaking 
            <b> valleys and rivers</b>, we bring you experiences that blend 
            <b> adventure, culture, and tradition</b>.
          </p>
          <p>
            Our mission is to promote sustainable tourism while supporting 
            local communities through authentic products and unforgettable journeys.  
            Whether you’re here to explore <b>beautiful landscapes</b>, discover 
            <b> unique dry fruits of GB</b> 🌰, or dive into its rich cultural heritage – 
            we’ve got you covered. ✨
          </p>
          <button className="explore-btn">Start Your Journey</button>
        </div>

        {/* Right side image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Gilgit-Baltistan Mountains"
          />
          <div className="icon-box">
            <FaMountain className="icon" title="Mountains" />
            <FaMapMarkedAlt className="icon" title="Tourism" />
            <FaAppleAlt className="icon" title="Dry Fruits" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
