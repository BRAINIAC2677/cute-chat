import React, { useContext } from "react";
import { globalContext } from "./globalContext";
import useRoomIndex from "../custom_hooks/useRoomIndex";

function InboxHeader() {
  const { global } = useContext(globalContext);
  const { user, chatRooms, currentRoomId } = global;
  const currentRoomInd = useRoomIndex(currentRoomId);
  let name, imgUrl;

  if (currentRoomInd !== null) {
    const { room_name, imgUrls } = chatRooms[currentRoomInd];
    name = room_name[0] === user.displayName ? room_name[1] : room_name[0];
    imgUrl = imgUrls[0] === user.photoURL ? imgUrls[1] : imgUrls[0];
  }

  return (
    <div className="inbox-header">
      <img className="avatar elevated" src={imgUrl} alt="avatar" />
      <p>{name}</p>
    </div>
  );
}

export default InboxHeader;
