import React, { useContext } from "react";
import { globalContext } from "./globalContext";
import useRoomIndex from "../custom_hooks/useRoomIndex";

function InboxHeader() {
  const { global } = useContext(globalContext);
  const { user, chatRooms, currentRoomId } = global;
  const currentRoomInd = useRoomIndex(currentRoomId);
  let { name, imgUrl, active } = chatRooms[currentRoomInd];

  return (
    <div className="inbox-header">
      <img
        style={
          active
            ? { border: "var(--active-col) solid 5px" }
            : { border: "var(--inactive-col) solid 5px" }
        }
        className="avatar elevated"
        src={imgUrl}
        alt="avatar"
      />

      <p>{name}</p>
    </div>
  );
}

export default InboxHeader;
