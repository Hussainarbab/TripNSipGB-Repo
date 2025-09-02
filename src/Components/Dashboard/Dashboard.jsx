import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="dashboard-title">Website Statistics</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h2>1200</h2>
          <p>Total Visitors</p>
        </div>
        <div className="stat-card">
          <h2>350</h2>
          <p>Bookings</p>
        </div>
        <div className="stat-card">
          <h2>$15,000</h2>
          <p>Revenue</p>
        </div>
        <div className="stat-card">
          <h2>85%</h2>
          <p>Customer Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
