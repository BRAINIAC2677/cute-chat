import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { fire, db } from "../services/firebase";
import { globalContext } from "../components/globalContext";
import ChatSide from "../components/ChatSide";
import ChatBox from "../components/ChatBox";
import Logout from "../components/Logout";
import Search from "../components/Search";

function Chat() {
  console.log("Chat Component");

  const { global, setGlobal } = useContext(globalContext);
  const { user, chatRooms } = global;

  useEffect(() => {
    const dbListener = db
      .collection("cute_rooms")
      .where("members", "array-contains", user.email)
      .onSnapshot((snapShot) => {
        let newChatRooms = [];
        snapShot.forEach((doc) => {
          newChatRooms.push({ room_id: doc.id, ...doc.data() });
        });

        setGlobal((prevGlobal) => {
          return { ...prevGlobal, chatRooms: newChatRooms };
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
          <Logout />
          <Search />
        </React.Fragment>
      )}
    </div>
  );
}

export default Chat;
