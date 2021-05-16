import React, { useContext } from "react";
import ChatBar from "./ChatBar";
import { globalContext } from "./globalContext";

function ChatSide() {
  console.log("ChatSide component.");

  const { global, setGlobal } = useContext(globalContext);
  const { chatRooms } = global;

  const chatBars = chatRooms.map((room) => {
    return <ChatBar key={room.room_id} info={room} />;
  });

  return (
    <div>
      <h1>Chat Side</h1>
      {chatBars}
    </div>
  );
}

export default ChatSide;
