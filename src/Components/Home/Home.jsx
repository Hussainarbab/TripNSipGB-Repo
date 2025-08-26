import React from "react";
import "./Home.css";  

const Home = () => {
  return (
    <section id="home" className="section">
      <h1>Welcome to TripNSipGB</h1>
      <p>Explore Gilgit-Baltistan and enjoy local products.</p>

      <div className="home-buttons">
        <button className="btn explore-btn">Explore Tours</button>
        <button className="btn shop-btn">Shop Now</button>
      </div>
    </section>
  );
};

export default Home;
