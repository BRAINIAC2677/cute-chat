import React from "react";

function ChatBar(props) {
  const { room_name, id } = props.info;

  function handleClick() {
    props.setCurrentRoomId(id);
  }
  return <button onClick={handleClick}>{room_name}</button>;
}

export default ChatBar;
