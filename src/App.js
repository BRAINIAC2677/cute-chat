import React, { useContext } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { userContext } from "./components/userContext";

function App() {
  const context = useContext(userContext);

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/">{context.user ? <Logout /> : <Login />}</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
