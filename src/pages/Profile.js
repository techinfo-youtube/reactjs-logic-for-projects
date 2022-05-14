import React from "react";
import { Link } from "react-router-dom";
const Profile = ({ handleLogout }) => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <h1>Hi , Welcome </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
