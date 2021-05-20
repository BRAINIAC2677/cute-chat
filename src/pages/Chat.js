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

  /* listening to the chatrooms and for each room another nested listener is added for the other user of the room. And if it is the last room then the chatRooms is updated in the global context.

  if there is no chatRooms for the user setGlobal is called with empty array. 
  
  chatRooms = {room_id, members, texts[], name, imgUrl, active,}*/

  useEffect(() => {
    let dbUserListener = [];
    const dbRoomListener = db
      .collection("cute_rooms")
      .where("members", "array-contains", user.email)
      .onSnapshot((snapShot) => {
        let newChatRooms = [];
        snapShot.forEach((doc) => {
          newChatRooms.push({ room_id: doc.id, ...doc.data() });
        });

        if (newChatRooms.length === 0) {
          setGlobal((prevGlobal) => {
            return { ...prevGlobal, chatRooms: newChatRooms };
          });
        }

        for (let index in newChatRooms) {
          let otherEndEmail =
            newChatRooms[index].members[0] === user.email
              ? newChatRooms[index].members[1]
              : newChatRooms[index].members[0];
          dbUserListener.push(
            db
              .collection("cute_users")
              .where("email", "==", otherEndEmail)
              .onSnapshot((snapShot) => {
                /* console.log(`snapShot: ${JSON.stringify(snapShot)}`); */
                snapShot.forEach((user) => {
                  console.log(`\n\n\nuser ${JSON.stringify(user)}`);
                  newChatRooms[index] = {
                    ...user.data(),
                    ...newChatRooms[index],
                  };

                  if (index == newChatRooms.length - 1) {
                    setGlobal((prevGlobal) => {
                      return { ...prevGlobal, chatRooms: newChatRooms };
                    });
                  }
                });
              })
          );
        }
      });

    return function cleanup() {
      dbRoomListener();
      for (let i of dbUserListener) {
        i();
      }
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
