import React, { useContext } from "react";
import { globalContext } from "./globalContext";

function ChatBar(props) {
  const { global, setGlobal } = useContext(globalContext);
  const { chatRooms } = global;
  const { room_name, roomId } = props.info;

  function handleClick() {
    const currentRoomInd = chatRooms.findIndex(
      (room) => room.roomId === roomId
    );
    setGlobal((prevGlobal) => {
      return { ...prevGlobal, currentRoomId: roomId, currentRoomInd };
    });
  }
  return <button onClick={handleClick}>{room_name}</button>;
}

export default ChatBar;
