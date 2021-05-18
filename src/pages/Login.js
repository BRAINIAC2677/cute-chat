import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { fire } from "../services/firebase";
import uiConfig from "../services/firebaseui";
import "../styles/Login.css";

function Login() {
  console.log("Login Component.");

  return (
    <div className="container">
      <div className="login-container elevated">
        <p className="item title">Login</p>
        <div className="item">
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
        </div>
        <p className="item dev">Developed By: Asif Azad</p>
      </div>
    </div>
  );
}

export default Login;
