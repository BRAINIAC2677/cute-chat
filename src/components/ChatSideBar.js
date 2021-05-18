import React, { useContext } from "react";
import ChatHead from "./ChatHead";
import { globalContext } from "./globalContext";
import { styleContext } from "./styleContext";

function ChatSideBar() {
  console.log("ChatSideBar component.");

  const { global } = useContext(globalContext);
  const { myStyle } = useContext(styleContext);
  const { focused } = myStyle;
  const { chatRooms } = global;

  const chatHeads = chatRooms.map((room) => {
    return <ChatHead key={room.room_id} info={room} />;
  });

  let focusedStyle = {
    display: "block",
    gridArea: "focus",
  };

  if (focused === -1) {
    focusedStyle.gridArea = "sidebar";
  }

  const hiddenStyle = {
    display: "none",
  };

  console.log(`focused in sidebar: ${focused}`);

  return (
    <div
      className="chat-sidebar pressed"
      style={focused === 0 ? hiddenStyle : focusedStyle}
    >
      {chatHeads}
    </div>
  );
}

export default ChatSideBar;
