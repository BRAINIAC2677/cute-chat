import React, { useContext } from "react";
import { globalContext } from "./globalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandshake } from "@fortawesome/free-solid-svg-icons";

function BlankRoom() {
  console.log("BlankRoom Component.");

  const { global } = useContext(globalContext);
  const { user } = global;

  return (
    <div className="blank-room">
      <p>{`Welcome To CuteChat ${user.displayName}`}</p>
      <div className="faded-icon">
        <FontAwesomeIcon icon={faHandshake} />
      </div>
    </div>
  );
}

export default BlankRoom;
