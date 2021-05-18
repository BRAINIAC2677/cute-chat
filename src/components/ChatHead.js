import React, { useContext } from "react";
import { globalContext } from "./globalContext";
import { styleContext } from "./styleContext";
import useWindowsDimensions from "../custom_hooks/useWindowDimensions";

function ChatHead(props) {
  console.log("ChatHead Component");

  const { width } = useWindowsDimensions();
  const { myStyle, setMyStyle } = useContext(styleContext);
  const { breakPoint } = myStyle;
  const { global, setGlobal } = useContext(globalContext);
  const { user } = global;
  const { room_name, room_id, imgUrls } = props.info;
  let name = room_name[0] === user.displayName ? room_name[1] : room_name[0];
  let imgUrl = imgUrls[0] === user.photoURL ? imgUrls[1] : imgUrls[0];

  function handleClick() {
    setGlobal((prevGlobal) => {
      return { ...prevGlobal, currentRoomId: room_id };
    });

    if (width <= breakPoint) {
      setMyStyle((prevMyStyle) => {
        return { ...prevMyStyle, focused: 0 };
      });
    }
  }
  console.log(`Image: ${props.info}`);
  return (
    <button className="chat-head elevated" onClick={() => handleClick()}>
      <img className="avatar" src={imgUrl} alt="avatar" />
      <p>{name}</p>
    </button>
  );
}

export default ChatHead;
