import React, { useContext } from "react";
import { fire, db } from "../services/firebase";
import { globalContext } from "./globalContext";
import useRoomIndex from "../helper/useRoomIndex";

function Text(props) {
  console.log("Text component");

  const { global, setGlobal } = useContext(globalContext);
  const { chatRooms, currentRoomId } = global;
  const currentRoomInd = useRoomIndex(currentRoomId);
  const { id, body, time, author } = props.info;

  function handleDelete() {
    let updTexts = chatRooms[currentRoomInd].texts.filter((text) => {
      return text.id != id;
    });

    db.collection("cute_rooms")
      .doc(currentRoomId)
      .update({ texts: updTexts })
      .then(() => console.log("success writing"))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <p>{author}</p>
      <p>{time}</p>
      <h1>{body}</h1>
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

export default Text;
