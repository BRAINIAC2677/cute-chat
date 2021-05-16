import React, { useContext } from "react";
import { globalContext } from "./globalContext";

function ChatHead(props) {
  console.log("ChatHead Component");

  const { global, setGlobal } = useContext(globalContext);
  const { user } = global;
  const { room_name, room_id } = props.info;
  let name = room_name[0] === user.displayName ? room_name[1] : room_name[0];

  function handleClick() {
    setGlobal((prevGlobal) => {
      return { ...prevGlobal, currentRoomId: room_id };
    });
  }
  return <button onClick={() => handleClick()}>{name}</button>;
}

export default ChatHead;