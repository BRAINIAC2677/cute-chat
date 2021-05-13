import React from "react";
import firebase from "firebase";
import TextField from "@material-ui/core/TextField";
import { fire, db } from "../services/firebase";
import { globalContext } from "./globalContext";

function WriteText() {
  const { global, setGlobal } = React.useContext(globalContext);
  const { chatRooms, currentRoomInd, currentRoomId, user } = global;
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

    console.log(updTexts);
    console.log(currentRoomId);

    db.collection("chat_rooms")
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
