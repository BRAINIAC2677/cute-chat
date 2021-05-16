import React, { useContext } from "react";
import BlankRoom from "./BlankRoom";
import Text from "./Text";
import { globalContext } from "./globalContext";
import WriteText from "./WriteText";
import useRoomIndex from "../helper/useRoomIndex";

function ChatBox() {
  console.log("ChatBox component");

  const { global, setGlobal } = useContext(globalContext);
  const { chatRooms, currentRoomId } = global;
  const currentRoomInd = useRoomIndex(currentRoomId);

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
