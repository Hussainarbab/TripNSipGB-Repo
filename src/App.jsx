import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import Tour from "./Components/Tour/Tour";
import Footer from "./Components/Footer/Footer"


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Tour />
      <Products />
      <Contact />
      <Footer/>
      
      
    </div>
  );
}

export default App;
