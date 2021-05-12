import React, { useState } from "react";
import ChatSide from "../components/ChatSide";

function Chat() {
  const [chatRooms, setChatRooms] = useState(null);

  return (
    <div>
      <h1>Chat</h1>
      <ChatSide chatRooms={chatRooms} setChatRooms={setChatRooms} />
    </div>
  );
}

export default Chat;
