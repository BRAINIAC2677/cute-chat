import React, { useContext } from "react";
import BlankRoom from "./BlankRoom";
import Text from "./Text";
import { globalContext } from "./globalContext";
import WriteText from "./WriteText";

function ChatBox() {
  console.log("ChatBox");

  const { global, setGlobal } = useContext(globalContext);
  const { chatRooms, currentRoomInd } = global;

  console.log(chatRooms);

  return (
    <div>
      {currentRoomInd === null ? (
        <BlankRoom />
      ) : (
        <>
          {chatRooms[currentRoomInd].texts.map((text) => {
            return <Text key={text.id} info={text} />;
          })}
          <WriteText />
        </>
      )}
    </div>
  );
}

export default ChatBox;
