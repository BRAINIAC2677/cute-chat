import React, { useContext } from "react";
import { fire, db } from "../services/firebase";
import { globalContext } from "../components/globalContext";

function ChatSide(props) {
  const { user } = useContext(globalContext).global;
  const { chatRooms, setChatRooms } = props;

  if (chatRooms == null) {
    db.collection("chat-rooms")
      .where("members", "array-contains", user.email)
      .get()
      .then((querySnapshot) => {
        let newChatRooms = {};
        querySnapshot.forEach((doc) => {
          newChatRooms[doc.id] = doc.data();
        });
        setChatRooms(newChatRooms);
      });
  }

  return <div>Chat Side</div>;
}

export default ChatSide;
