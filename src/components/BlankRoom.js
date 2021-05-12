import React, { useContext } from "react";
import { globalContext } from "./globalContext";

function BlankRoom() {
  const { user } = useContext(globalContext).global;
  return <div>{`Welcome ${user.displayName}`}</div>;
}

export default BlankRoom;
