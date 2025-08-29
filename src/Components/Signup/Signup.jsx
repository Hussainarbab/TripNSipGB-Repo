import React, { useState } from "react";
import "./Signup.css";

function Signup({ setUser, setShowSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Check if fields are filled
    if (!email || !password || !confirmPassword) {
      alert("Fill all fields");
      return;
    }

    // Check if password matches
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user data in localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.find((u) => u.email === email);

    if (userExists) {
      alert("User already exists! Please login.");
      return;
    }

    const newUser = { email, password };
    localStorage.setItem("users", JSON.stringify([...existingUsers, newUser]));

    alert("Signup successful! Please login.");
    setShowSignup(false); // Redirect to login page
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignup}>
        <h2>Signup</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
        <p>
          Already have an account?{" "}
          <span onClick={() => setShowSignup(false)} className="link">
            Login
          </span>
        </p>
      </form>
    </div>
  );
}

export default Signup;
