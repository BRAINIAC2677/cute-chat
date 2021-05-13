import React, { useState, useContext, useEffect } from "react";
import { fire, db } from "../services/firebase";
import { globalContext } from "../components/globalContext";
import ChatSide from "../components/ChatSide";
import ChatBox from "../components/ChatBox";

function Chat() {
  console.log("Chat");

  const { global, setGlobal } = useContext(globalContext);
  const { user, chatRooms } = global;

  useEffect(() => {
    const dbListener = db
      .collection("chat_rooms")
      .where("members", "array-contains", user.email)
      .onSnapshot((snapShot) => {
        let newChatRooms = [];
        snapShot.forEach((doc) => {
          newChatRooms.push({ roomId: doc.id, ...doc.data() });
        });

        console.log(`newChatRooms ${newChatRooms}`);

        setGlobal((prevGlobal) => {
          return { ...prevGlobal, chatRooms: newChatRooms };
        });

        snapShot.docChanges().forEach((change) => {
          console.log(change);
          console.log(change.type);
          console.log(change.doc.data());
        });
      });

    return function cleanup() {
      dbListener();
    };
  }, []);

  return (
    <div>
      {chatRooms === null ? (
        <React.Fragment>Loading...</React.Fragment>
      ) : (
        <React.Fragment>
          <h1>Chat</h1>
          <ChatSide />
          <ChatBox />
        </React.Fragment>
      )}
    </div>
  );
}

export default Chat;
