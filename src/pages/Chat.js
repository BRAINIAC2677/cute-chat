import React, { useState, useContext, useEffect } from "react";
import { fire, db } from "../services/firebase";
import { globalContext } from "../components/globalContext";
import ChatSide from "../components/ChatSide";
import ChatBox from "../components/ChatBox";

function Chat() {
  console.log("Chat");

  const [chatRooms, setChatRooms] = useState(null);
  const [currentRoomId, setCurrentRoomId] = useState("NpzaZuwims0amaGS8SF7");
  const { user } = useContext(globalContext).global;

  useEffect(() => {
    const dbListener = db
      .collection("chat_rooms")
      .where("members", "array-contains", user.email)
      .onSnapshot((snapShot) => {
        let newChatRooms = [];
        snapShot.forEach((doc) => {
          newChatRooms.push({ id: doc.id, ...doc.data() });
        });
        setChatRooms(newChatRooms);

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
          <ChatSide chatRooms={chatRooms} setCurrentRoomId={setCurrentRoomId} />
          <ChatBox chatRooms={chatRooms} currentRoomId={currentRoomId} />
        </React.Fragment>
      )}
    </div>
  );
}

export default Chat;
