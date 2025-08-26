import React from "react";
import "./Tour.css";
import { FaHiking, FaMapSigns, FaCameraRetro } from "react-icons/fa";
import tourimg from "../../assets/tour.webp"

const Tours = () => {
  return (
    <section id="tours" className="tours-section">
      <h1>Tours Places</h1>
      <div className="tours-container">
        {/* Left side image */}
        <div className="tours-image">
          <img
            src={tourimg}
            alt="Gilgit-Baltistan Tours"
          />
          <div className="icon-box">
            <FaHiking className="icon" />
            <FaMapSigns className="icon" />
            <FaCameraRetro className="icon" />
          </div>
        </div>

        {/* Right side text */}
        <div className="tours-text">
          <h1>
            Explore <span>Gilgit-Baltistan</span> ✨
          </h1>
          <p>
            Join <b>TripNSipGB</b> for unforgettable journeys through 
            the <span className="highlight">Karakoram, Himalayas, and Hindukush</span>.  
            From hidden valleys to historic trails, our guided tours are 
            designed for adventurers, photographers, and culture lovers alike. 🌍
          </p>
          <p>
            Experience breathtaking views, local traditions, and 
            the unmatched beauty of Gilgit-Baltistan. Whether it’s 
            <b> trekking, sightseeing, or exploring hidden gems</b>, 
            our tours promise memories you’ll cherish forever. 🌿
          </p>
          <button className="explore-btn">Book a Tour</button>
        </div>
      </div>
    </section>
  );
};

export default Tours;
