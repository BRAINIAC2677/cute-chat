import React, { useContext } from "react";

import ChatBar from "./ChatBar";

function ChatSide(props) {
  console.log("ChatSide");

  const { chatRooms, setCurrentRoomId } = props;

  const chatBars = chatRooms.map((room) => {
    return (
      <ChatBar key={room.id} info={room} setCurrentRoomId={setCurrentRoomId} />
    );
  });

  return (
    <div>
      <h1>Chat Side</h1>
      {chatBars}
    </div>
  );
}

export default ChatSide;
