import React from "react";
import { fire, db } from "../services/firebase";
import useWindowDimensions from "../custom_hooks/useWindowDimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Logout() {
  /* console.log("Logout Component."); */

  const { width } = useWindowDimensions();

  function handleLogout() {
    let uid = fire.auth().currentUser.uid;
    fire
      .auth()
      .signOut()
      .then(() => {
        db.collection("cute_users")
          .doc(uid)
          .update({ active: false })
          .then(() => console.log(`active status changed`))
          .catch((error) =>
            console.log(`${error} in chaging active status in database.`)
          );
      });
  }
  return (
    <button
      className={width <= 400 ? "rounded-btn elevated" : "logout elevated"}
      onClick={handleLogout}
    >
      {width <= 480 ? <FontAwesomeIcon icon={faSignOutAlt} /> : "Logout"}
    </button>
  );
}

export default Logout;
