import React, { useContext, useEffect } from "react";
import { globalContext } from "../components/globalContext";
import { db } from "../services/firebase";
import ChatSideBar from "../components/ChatSideBar";
import ChatBox from "../components/ChatBox";
import ChatHeader from "../components/ChatHeader";
import GreyOut from "../components/GreyOut";
import ChatFooter from "../components/ChatFooter";
import { styleContext } from "../components/styleContext";
import useWindowDimensions from "../custom_hooks/useWindowDimensions";
import "../styles/Chat.css";

function Chat() {
  /* console.log("Chat Component"); */

  const { global, setGlobal } = useContext(globalContext);
  const { myStyle, setMyStyle } = useContext(styleContext);
  const { breakPoint } = myStyle;
  const { width } = useWindowDimensions();
  const { user, chatRooms } = global;

  /*   console.log(`width: ${width}`);
  console.log(`focused: ${myStyle.focused}`); */

  useEffect(() => {
    if (width <= breakPoint) {
      setMyStyle((prevMyStyle) => {
        return { ...prevMyStyle, focused: 0 };
      });
    } else {
      setMyStyle((prevMyStyle) => {
        return { ...prevMyStyle, focused: -1 };
      });
    }
  }, [width]);

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

  const loadingStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",
    height: "100vh",
    fontSize: "1.5rem",
    backgroundColor: "var(--primary-col)",
  };

  return (
    <React.Fragment>
      {chatRooms === null ? (
        <div style={loadingStyle}>
          <p>Loading. . .</p>
        </div>
      ) : (
        <div className="chat-container">
          <ChatHeader />
          <ChatSideBar />
          <ChatBox />
          <ChatFooter />
          <GreyOut />
        </div>
      )}
    </React.Fragment>
  );
}

export default Chat;
