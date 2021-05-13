import React, { useContext } from "react";
import { fire, db } from "../services/firebase";
import { globalContext } from "./globalContext";

function Text(props) {
  const { global, setGlobal } = useContext(globalContext);
  const { chatRooms, currentRoomInd, currentRoomId } = global;
  const { id, body, time, author } = props.info;

  function handleDelete() {
    let updTexts = chatRooms[currentRoomInd].texts.filter((text) => {
      return text.id != id;
    });

    db.collection("chat_rooms")
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
