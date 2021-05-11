import React, { useContext, useEffect } from "react";
import fire from "../services/firebase";
import uiConfig from "../services/firebaseui";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { userContext } from "./userContext";

function Login() {
  const context = useContext(userContext);

  useEffect(() => {
    const authChange = fire.auth().onAuthStateChanged((user) => {
      context.setUser(user);
    });

    return authChange;
  }, []);

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={fire.auth()} />
    </div>
  );
}

export default Login;
