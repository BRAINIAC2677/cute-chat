import React, { useContext } from "react";
import { globalContext } from "./globalContext";
import { fire, db } from "../services/firebase";

function UserBar(props) {
  console.log("UserBarDm component.");

  const { global, setGlobal } = useContext(globalContext);
  const { chatRooms, user } = global;
  const { name, email, imgUrl } = props.info;

  async function handleClick() {
    console.log("ChatBar from searches Click");

    if (email === user.email) {
      console.log("This is You!");
    }

    let currentRoomInd = chatRooms.findIndex((room) => {
      return room.members.includes(email);
    });
    if (currentRoomInd === -1) {
      const room_name = [user.displayName, name],
        members = [user.email, email];
      const newRoom = { room_name, members, texts: [] };
      const docRef = await db.collection("cute_rooms").add(newRoom);

      console.log(`${docRef.id} successfully room added.`);

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
  }
  return <button onClick={() => handleClick()}>{name}</button>;
}

export default UserBar;
