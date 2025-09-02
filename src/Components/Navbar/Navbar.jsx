import React, { useState } from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    if (section) {
      const targetPosition =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      setIsOpen(false); // close menu after clicking
    }
  };

  // Always go to Dashboard when clicking Visit Website
  const handleVisitWebsite = () => {
    navigate("/dashboard");
  };

  return (
    <nav className="navbar">
      <h2 className="logo">TripNSipGB</h2>

      {/* mobile menu icon */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("about")}>About</li>
        <li onClick={() => handleScroll("tours")}>Tours</li>
        <li onClick={() => handleScroll("products")}>Products</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>

        {/* Login/Signup links */}
        <li>
          <Link className="link" to="/login">Login</Link>
        </li>
        <li>
          <Link className="link" to="/signup">Signup</Link>
        </li>

        {/* Only Visit Website is a button */}
        <li>
          <button className="visit-btn" onClick={handleVisitWebsite}>
            Visit Website
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
