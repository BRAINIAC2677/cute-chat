import React, { useContext } from "react";
import { db } from "../services/firebase";
import { globalContext } from "./globalContext";
import useRoomIndex from "../custom_hooks/useRoomIndex";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

function Text(props) {
  console.log("Text component");

  const { global } = useContext(globalContext);
  const { chatRooms, currentRoomId, user } = global;
  const currentRoomInd = useRoomIndex(currentRoomId);
  const { id, body, time, author } = props.info;

  const { members, imgUrls } = chatRooms[currentRoomInd];
  const authorIndex = members.findIndex((member) => member === author);
  const imgUrl = imgUrls[authorIndex];

  function handleDelete() {
    let updTexts = chatRooms[currentRoomInd].texts.filter((text) => {
      return text.id !== id;
    });

    db.collection("cute_rooms")
      .doc(currentRoomId)
      .update({ texts: updTexts })
      .then(() => console.log("success writing"))
      .catch((error) => console.log(error));
  }

  let imgStyle = {};
  let contentStyle = {
    marginLeft: "1rem",
  };

  if (author === user.email) {
    imgStyle = {
      order: "2",
    };

    contentStyle = {
      order: "1",
      marginRight: "1rem",
    };
  }

  return (
    <div
      className="chat-text"
      style={author === user.email ? { alignSelf: "flex-end" } : null}
    >
      <img className="avatar" src={imgUrl} style={imgStyle} alt="avatar" />
      <div className="chat-text-content elevated" style={contentStyle}>
        <p className="chat-text-time">{time}</p>
        <p className="chat-text-body">{body}</p>
        {author === user.email && (
          <button className="chat-text-delete" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        )}
      </div>
    </div>
  );
}

export default Text;
