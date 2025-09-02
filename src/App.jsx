import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Products from "./Components/Products/Products";
import Contact from "./Components/Contact/Contact";
import Tour from "./Components/Tour/Tour";
import Footer from "./Components/Footer/Footer";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";  // 👈 added

function App() {
  const [user, setUser] = useState(null); 
  const [showSignup, setShowSignup] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false); // 👈 added

  return (
    <div>
      {!user ? (
        showSignup ? (
          <Signup setUser={setUser} setShowSignup={setShowSignup} />
        ) : (
          <Login setUser={setUser} setShowSignup={setShowSignup} />
        )
      ) : showDashboard ? (   
        <Dashboard setShowDashboard={setShowDashboard} />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Tour />
          <Products />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
