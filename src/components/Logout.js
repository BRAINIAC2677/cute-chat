import React from "react";
import { fire } from "../services/firebase";

function Logout() {
  console.log("Logout Component.");

  function handleLogout() {
    fire.auth().signOut();
  }
  return (
    <div>
      <h1>Hola</h1>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}

export default Logout;
