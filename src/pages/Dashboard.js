import React from "react";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Link to="/profile">Profile Page</Link>
    </div>
  );
};

export default Dashboard;
