import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <h2 className="logo">TripNSipGB</h2>
      <ul className="nav-links">
        <li onClick={() => handleScroll("home")}>Home</li>
        <li onClick={() => handleScroll("about")}>About</li>
        <li onClick={() => handleScroll("tours")}>Tours</li>
        <li onClick={() => handleScroll("products")}>Products</li>
        <li onClick={() => handleScroll("contact")}>Contact</li>
       
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
