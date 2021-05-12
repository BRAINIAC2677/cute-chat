import React from "react";
import BlankRoom from "./BlankRoom";
import Text from "./Text";

function ChatBox(props) {
  console.log("ChatBox");

  const { chatRooms, currentRoomId } = props;

  const currentRoomInd = chatRooms.findIndex(
    (room) => room.id === currentRoomId
  );

  return (
    <div>
      {currentRoomInd === -1 ? (
        <BlankRoom />
      ) : (
        chatRooms[currentRoomInd].texts.map((text) => {
          return <Text key={text.id} info={text} />;
        })
      )}
    </div>
  );
}

export default ChatBox;
