import React, { useContext, useEffect } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { globalContext } from "./components/globalContext";
import { fire, db } from "./services/firebase";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { StyleContextProvider } from "./components/styleContext";

function App() {
  /* console.log("App component"); */

  const { global, setGlobal } = useContext(globalContext);
  const { user } = global;

  useEffect(() => {
    const authChange = fire.auth().onAuthStateChanged((user) => {
      /* console.log(`Auth Changed. User: ${user}`); */

      user === null
        ? setGlobal((prevGlobal) => {
            return {
              ...prevGlobal,
              user: null,
              currentRoomId: null,
              chatRooms: null,
            };
          })
        : setGlobal((prevGlobal) => {
            return { ...prevGlobal, user };
          });

      if (user) {
        let newUser = {
          active: true,
          name: user.displayName,
          email: user.email,
          imgUrl: user.photoURL,
        };

        db.collection("cute_users")
          .doc(fire.auth().currentUser.uid)
          .set(newUser)
          .then(() => console.log(` new user successfully in.`))
          .catch((error) =>
            console.log(`${error} in writing new user in database.`)
          );
      }
    });

    return function cleanup() {
      authChange();
    };
  }, []);

  return (
    <StyleContextProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            {user ? <Chat /> : <Login />}
          </Route>
        </Switch>
      </Router>
    </StyleContextProvider>
  );
}

export default App;
