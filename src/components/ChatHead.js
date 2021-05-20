import React, { useContext } from "react";
import { globalContext } from "./globalContext";
import { styleContext } from "./styleContext";
import useWindowsDimensions from "../custom_hooks/useWindowDimensions";
import { db } from "../services/firebase";

function ChatHead(props) {
  /* console.log("ChatHead Component"); */

  const { width } = useWindowsDimensions();
  const { myStyle, setMyStyle } = useContext(styleContext);
  const { breakPoint } = myStyle;
  const { setGlobal } = useContext(globalContext);
  const { name, room_id, imgUrl, active } = props.info;
  const activeStatus = active ? "Active" : "Inactive";

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

  return (
    <button
      style={
        active
          ? {
              backgroundColor: "rgba(0, 255, 0, 0.1)",
              border: "var(--active-col) solid 3px",
            }
          : {
              backgroundColor: "rgba(255,0, 0, 0.1)",
              border: "var(--inactive-col) solid 3px",
            }
      }
      className="chat-head elevated"
      onClick={() => handleClick()}
    >
      <img
        style={
          active
            ? { border: "var(--active-col) solid 5px" }
            : { border: "var(--inactive-col) solid 5px" }
        }
        className="avatar"
        src={imgUrl}
        alt="avatar"
      />
      <p>{name}</p>
      <p style={{ fontSize: "var(--font-size-3)" }}>{activeStatus}</p>
    </button>
  );
}

export default ChatHead;
