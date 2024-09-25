import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "password") {
      setIsAuthenticated(true); // Call the login function from the parent
      navigate("/home"); // Navigate to the home page
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="containers">
      <div className="login-container">
        <h1
          style={{
            fontFamily: "fantasy",
            fontSize: "28px",
            fontWeight: "bold",
            justifyContent:'center'
          }}
        >
          Login
        </h1>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button style={{ borderRadius: "10px" }} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
