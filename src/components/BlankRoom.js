import React, { useContext } from "react";
import { globalContext } from "./globalContext";

function BlankRoom() {
  const { global, setGlobal } = useContext(globalContext);
  const { user } = global;
  return <React.Fragment>{`Welcome ${user.displayName}`}</React.Fragment>;
}

export default BlankRoom;
