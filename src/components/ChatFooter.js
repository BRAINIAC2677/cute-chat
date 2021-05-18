import React, { useContext } from "react";
import { styleContext } from "./styleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faParachuteBox } from "@fortawesome/free-solid-svg-icons";

function ChatFooter() {
  const { myStyle, setMyStyle } = useContext(styleContext);
  const { focused } = myStyle;

  function handleClick() {
    setMyStyle((prevMyStyle) => {
      const focused = 1 - prevMyStyle.focused;
      return { ...prevMyStyle, focused };
    });
  }

  return (
    <div className="chat-footer elevated">
      <button className="elevated rounded-btn" onClick={handleClick}>
        <FontAwesomeIcon icon={focused === 0 ? faCoffee : faParachuteBox} />
      </button>
    </div>
  );
}

export default ChatFooter;
