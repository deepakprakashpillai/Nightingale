import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import logo from "../assets/logo.png";
import bgelement from "../assets/login-page-bg.png";
const LOGIN_URL = "http://localhost:8000/auth/login/";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  

  const handleLogin = async () => {
    try {
      console.log("Logging in with:", { username, password });

      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        localStorage.setItem("token", data.token);
        navigate("/home");
        // Save the token and user data as needed
      } else {
        console.error("Login failed:", response.status, response.statusText);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="logodiv">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="logo-name">NIGHTINGALE</h2>
      </div>

      <div className="inp-container">
        <input
          type="text"
          placeholder="Username"
          className="inp-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <span class="user-icon"></span>
        <input
          type="password"
          placeholder="Password"
          className="inp-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span class="pass-icon"></span>
        <button onClick={handleLogin} className="inp-but">
          SUBMIT
        </button>
      </div>
      <img src={bgelement} alt="design" className="bg-design" />
    </>
  );
};

export default LoginPage;
