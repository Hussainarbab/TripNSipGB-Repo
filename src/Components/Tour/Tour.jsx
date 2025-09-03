import React from "react";
import "./Tour.css";
import { FaHiking, FaMapSigns, FaCameraRetro } from "react-icons/fa";

// Example images (replace these with your actual images)
import hunzaImg from "../../assets/hunza.jpg";
import nagarImg from "../../assets/nagar.jpeg";
import hoperImg from "../../assets/hoper.webp";
import hisperImg from "../../assets/hisper.jpg";
import rakaposhiImg from "../../assets/rakaposhi.jpeg";
import altitImg from "../../assets/altit.webp";

const places = [
  { name: "Hunza", image: hunzaImg },
  { name: "Nagar", image: nagarImg },
  { name: "Hoper", image: hoperImg },
  { name: "Hisper", image: hisperImg },
  { name: "Rakaposhi", image: rakaposhiImg },
  { name: "Altit", image: altitImg },
];

const Tours = () => {
  const handleTravelClick = (placeName) => {
    if (placeName === "Rakaposhi") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      alert(`Travel plans for ${placeName} contact us ! 🚀`);
    }
  };

  return (
    <section id="tours" className="tours-section">
      <h1>Famous Places in Gilgit-Baltistan</h1>
      <div className="tours-container">
        {places.map((place, index) => (  
          <div key={index} className="tour-card">
            <img src={place.image} alt={place.name} />
            <div className="tour-info">
              <h2>{place.name}</h2>
              <div className="icon-box">
                <FaHiking className="icon" />
                <FaMapSigns className="icon" />
                <FaCameraRetro className="icon" />
              </div>
              <button
                className="explore-btn"
                onClick={() => handleTravelClick(place.name)}
              >
                Travel to {place.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tours;
