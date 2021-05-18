import React, { useContext } from "react";
import { globalContext } from "./globalContext";
import useRoomIndex from "../custom_hooks/useRoomIndex";
import ChatText from "./ChatText";

function ChatTexts() {
  const { global } = useContext(globalContext);
  const { chatRooms, currentRoomId } = global;
  const currentRoomInd = useRoomIndex(currentRoomId);

  return (
    <div className="chat-texts">
      {chatRooms[currentRoomInd].texts.map((text) => {
        return <ChatText key={text.id} info={text} />;
      })}
    </div>
  );
}

export default ChatTexts;
