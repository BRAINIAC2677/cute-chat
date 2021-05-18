import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { fire } from "../services/firebase";
import uiConfig from "../services/firebaseui";
import "../styles/Login.css";

function Login() {
  console.log("Login Component.");

  return (
    <div className="container">
      <div className="login-container">
        <p className="item">Login</p>
        <div className="item">
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
        </div>
      </div>
    </div>
  );
}

export default Login;
