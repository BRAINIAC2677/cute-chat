import React, { useContext } from "react";
import { globalContext } from "./globalContext";
import { styleContext } from "./styleContext";
import useRoomIndex from "../custom_hooks/useRoomIndex";
import BlankRoom from "./BlankRoom";
import ComposeChatText from "./ComposeChatText";
import InboxHeader from "../components/InboxHeader";
import ChatTexts from "../components/ChatTexts";

function ChatBox() {
  /* console.log("ChatBox component"); */

  const { myStyle } = useContext(styleContext);
  const { focused } = myStyle;

  const { global } = useContext(globalContext);
  const { currentRoomId } = global;
  const currentRoomInd = useRoomIndex(currentRoomId);

  let focusedStyle = {
    display: "grid",
    gridArea: "focus",
  };

  if (focused === -1) {
    focusedStyle.gridArea = "box";
  }

  const hiddenStyle = {
    display: "none",
  };

  return (
    <div
      className="chat-box pressed"
      style={focused === 1 ? hiddenStyle : focusedStyle}
    >
      {currentRoomInd === null ? (
        <BlankRoom />
      ) : (
        <>
          <InboxHeader />
          <ChatTexts />
          <ComposeChatText />
        </>
      )}
    </div>
  );
}

export default ChatBox;
