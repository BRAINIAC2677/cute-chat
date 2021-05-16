import React, { useContext } from "react";
import { globalContext } from "./globalContext";
import useRoomIndex from "../custom_hooks/useRoomIndex";
import BlankRoom from "./BlankRoom";
import ChatText from "./ChatText";
import ComposeChatText from "./ComposeChatText";

function ChatBox() {
  console.log("ChatBox component");

  const { global } = useContext(globalContext);
  const { chatRooms, currentRoomId } = global;
  const currentRoomInd = useRoomIndex(currentRoomId);

  return (
    <div>
      {currentRoomInd === null ? (
        <BlankRoom />
      ) : (
        <>
          {chatRooms[currentRoomInd].texts.map((text) => {
            return <ChatText key={text.id} info={text} />;
          })}
          <ComposeChatText />
        </>
      )}
    </div>
  );
}

export default ChatBox;
