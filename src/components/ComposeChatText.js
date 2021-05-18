import React from "react";
import { db } from "../services/firebase";
import { globalContext } from "./globalContext";
import useRoomIndex from "../custom_hooks/useRoomIndex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

function ComposeChatText() {
  console.log("ComposeChatText Component");

  const { global } = React.useContext(globalContext);
  const { chatRooms, currentRoomId, user } = global;
  const currentRoomInd = useRoomIndex(currentRoomId);

  const [inpVal, setInpVal] = React.useState("");

  function handleChange(event) {
    setInpVal(event.target.value);
  }

  function handleClick() {
    const curTime = new Date();
    let newText = {
      id: Date.now(),
      author: user.email,
      body: inpVal,
      time: curTime.toLocaleTimeString(),
    };

    let updTexts = chatRooms[currentRoomInd].texts;
    if (updTexts.length >= 5) {
      updTexts.shift();
    }
    updTexts.push(newText);

    db.collection("cute_rooms")
      .doc(currentRoomId)
      .update({ texts: updTexts })
      .then(() => console.log("success writing"))
      .catch((error) => console.log(error));

    setInpVal("");
  }

  return (
    <div className="compose-text">
      <input
        className="pressed"
        placeholder="You are awesome"
        value={inpVal}
        onChange={(event) => handleChange(event)}
      />
      <button className="elevated rounded-btn" onClick={handleClick}>
        <FontAwesomeIcon icon={faPaperPlane} />
      </button>
    </div>
  );
}

export default ComposeChatText;
