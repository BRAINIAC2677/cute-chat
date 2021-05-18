import React, { useContext } from "react";
import { globalContext } from "./globalContext";
import { styleContext } from "./styleContext";
import { db } from "../services/firebase";

function SearchResult(props) {
  /* console.log("SearchResult component."); */

  const { global, setGlobal } = useContext(globalContext);
  const { setMyStyle } = useContext(styleContext);
  const { chatRooms, user } = global;
  const { name, email, imgUrl } = props.info;

  async function handleClick() {
    /* console.log("Search Result from searches Click"); */

    if (email === user.email) {
      console.log("This is You!");
      setMyStyle((prevMyStyle) => {
        return { ...prevMyStyle, searchIsOn: false };
      });
      return;
    }

    let currentRoomInd = chatRooms.findIndex((room) => {
      return room.members.includes(email);
    });
    if (currentRoomInd === -1) {
      const room_name = [user.displayName, name],
        members = [user.email, email],
        imgUrls = [user.photoURL, imgUrl];
      const newRoom = { room_name, members, imgUrls, texts: [] };
      const docRef = await db.collection("cute_rooms").add(newRoom);

      /* console.log(`${docRef.id} successfully room added.`); */

      const updChatRooms = await db
        .collection("cute_rooms")
        .where("members", "array-contains", user.email)
        .get();

      let newChatRooms = [];

      for (let doc of updChatRooms.docs) {
        newChatRooms.push({ room_id: doc.id, ...doc.data() });
      }

      setGlobal((prevGlobal) => {
        return {
          ...prevGlobal,
          chatRooms: newChatRooms,
          currentRoomId: docRef.id,
        };
      });
    } else {
      let currentRoomId = chatRooms[currentRoomInd].room_id;
      setGlobal((prevGlobal) => {
        return { ...prevGlobal, currentRoomInd, currentRoomId };
      });
    }
    setMyStyle((prevMyStyle) => {
      return { ...prevMyStyle, searchIsOn: false };
    });
  }

  return (
    <button className="search-result elevated" onClick={() => handleClick()}>
      <img className="avatar" src={imgUrl} alt="" />
      <p>{name}</p>
    </button>
  );
}

export default SearchResult;
