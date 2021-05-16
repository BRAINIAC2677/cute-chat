import React, { useContext } from "react";
import ChatHead from "./ChatHead";
import { globalContext } from "./globalContext";

function ChatSideBar() {
  console.log("ChatSideBar component.");

  const { global } = useContext(globalContext);
  const { chatRooms } = global;

  const chatHeads = chatRooms.map((room) => {
    return <ChatHead key={room.room_id} info={room} />;
  });

  return (
    <div>
      <h1>Chat Side</h1>
      {chatHeads}
    </div>
  );
}

export default ChatSideBar;
