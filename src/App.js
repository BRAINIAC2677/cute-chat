import React, { useContext, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { fire } from "./services/firebase";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { globalContext } from "./components/globalContext";
import Chat from "./pages/Chat";

function App() {
  const context = useContext(globalContext);

  useEffect(() => {
    const authChange = fire.auth().onAuthStateChanged((user) => {
      context.setGlobal((prevGlobal) => {
        const newGlobal = { ...prevGlobal, user };
        return newGlobal;
      });
      //console.log(user);
    });
    return function cleanup() {
      authChange();
    };
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">{context.global.user ? <Chat /> : <Login />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
