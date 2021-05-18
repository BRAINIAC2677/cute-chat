import React from "react";
import { fire } from "../services/firebase";
import useWindowDimensions from "../custom_hooks/useWindowDimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

function Logout() {
  console.log("Logout Component.");

  const { width } = useWindowDimensions();

  function handleLogout() {
    fire.auth().signOut();
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
