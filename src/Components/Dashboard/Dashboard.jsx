import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = ({ setIsLoggedIn }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  return (
    <div className="dashboard">
      <h1>Welcome to Your Dashboard 🚀</h1>
      <button onClick={handleLogout} className="logout-btn">Logout</button>

      <div className="links">
        <h2>Explore Your Pages</h2>
        <Link to="/">🏠 Home</Link>
        <Link to="/about">ℹ️ About</Link>
        <Link to="/tours">🗺️ Tours</Link>
        <Link to="/products">🛒 Products</Link>
        <Link to="/contact">📞 Contact</Link>
      </div>

      <div className="chatbox">
        <h2>Chat with Me 💬</h2>
        <div className="messages">
          {messages.map((msg, idx) => (
            <p key={idx} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
              {msg.text}
            </p>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
