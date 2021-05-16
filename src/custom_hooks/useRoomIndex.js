import { useContext } from "react";
import { globalContext } from "../components/globalContext";

function useRoomIndex(id) {
  const { global, setGlobal } = useContext(globalContext);
  const { chatRooms } = global;
  if (id === null) {
    return null;
  }
  const index = chatRooms.findIndex((room) => room.room_id === id);
  return index;
}

export default useRoomIndex;
