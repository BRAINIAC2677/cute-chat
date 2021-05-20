import React, { useContext } from "react";
import { globalContext } from "./globalContext";
import useRoomIndex from "../custom_hooks/useRoomIndex";

function InboxHeader() {
  const { global } = useContext(globalContext);
  const { user, chatRooms, currentRoomId } = global;
  const currentRoomInd = useRoomIndex(currentRoomId);
  let { name, imgUrl } = chatRooms[currentRoomInd];

  return (
    <div className="inbox-header">
      <img className="avatar elevated" src={imgUrl} alt="avatar" />
      <p>{name}</p>
    </div>
  );
}

export default InboxHeader;
