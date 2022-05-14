import React from "react";
import { useNavigate } from "react-router-dom";
const Auth = ({ auth }) => {
  const navigate = useNavigate();
  const handleLogin = () => {
    auth();
    navigate("/dashboard");
    alert("login scuccess");
  };
  return (
    <div>
      <h4>Please Login </h4>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Auth;
