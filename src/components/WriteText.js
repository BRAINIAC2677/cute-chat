import React from "react";
import firebase from "firebase";
import TextField from "@material-ui/core/TextField";
import { fire, db } from "../services/firebase";
import { globalContext } from "./globalContext";
import useRoomIndex from "../helper/useRoomIndex";

function WriteText() {
  console.log("WriteText Component");

  const { global, setGlobal } = React.useContext(globalContext);
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
      author: user.displayName,
      body: inpVal,
      time: curTime.toLocaleString(),
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
    <div>
      <TextField
        label="Write"
        value={inpVal}
        onChange={(event) => handleChange(event)}
      ></TextField>
      <button onClick={handleClick}>Send</button>
    </div>
  );
}

export default WriteText;
