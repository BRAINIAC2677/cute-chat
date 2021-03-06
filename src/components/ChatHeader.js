import React, { useContext } from "react";
import { fire } from "../services/firebase";
import { globalContext } from "./globalContext";
import Search from "./Search";
import Logout from "./Logout";

function ChatHeader() {
  const { global } = useContext(globalContext);
  const { user } = global;

  return (
    <div className="chat-header elevated">
      <img className="avatar elevated" src={user.photoURL} alt="avatar" />
      <Search />
      <Logout />
    </div>
  );
}

export default ChatHeader;
