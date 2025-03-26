import React, { useState } from "react";
import "./WaiterLogin.css";
import { Navigate, useNavigate } from "react-router-dom";

const ChefLogin = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", Username, password);
    if ( Username === 'bhargav' && password === '160204'){
      navigate("/Chef/Orders")
    }else{
      Alert("Invalide email")
    }
 
  };
  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Chef Login</h2>
        <div className="input-group">
          <label>UserName</label>
          <input
            type="Username"
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default ChefLogin;