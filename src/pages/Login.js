import React, { useContext } from "react";
import { fire } from "../services/firebase";
import uiConfig from "../services/firebaseui";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

function Login() {
  console.log("Login Component.");

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
    </div>
  );
}

export default Login;
