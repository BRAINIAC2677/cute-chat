import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { fire } from "../services/firebase";
import uiConfig from "../services/firebaseui";

function Login() {
  console.log("Login Component.");

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
    </div>
  );
}

export default Login;
