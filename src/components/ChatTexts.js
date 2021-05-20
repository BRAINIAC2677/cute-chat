import React, { useContext, useRef, useEffect } from "react";
import { globalContext } from "./globalContext";
import useRoomIndex from "../custom_hooks/useRoomIndex";
import ChatText from "./ChatText";

function ChatTexts() {
  const { global } = useContext(globalContext);
  const { chatRooms, currentRoomId } = global;
  const currentRoomInd = useRoomIndex(currentRoomId);
  const scrollRef = useRef(null);
  let height;

  useEffect(() => {
    scrollRef.current.scrollTop =
      scrollRef.current.scrollHeight - scrollRef.current.clientHeight;
  });
  height = window.getComputedStyle(scrollRef.current).height;
  console.log(`height: ${height}`);
  return (
    <div className="chat-texts" ref={scrollRef}>
      <h1>{height}</h1>
      {chatRooms[currentRoomInd].texts.map((text) => {
        return <ChatText key={text.id} info={text} />;
      })}
    </div>
  );
}

export default ChatTexts;
