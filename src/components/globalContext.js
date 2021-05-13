import React, { useState } from "react";
const globalContext = React.createContext();

function GlobalContextProvider(props) {
  const [global, setGlobal] = useState({
    user: null,
    chatRooms: null,
    currentRoomId: null,
    currentRoomInd: null,
  });

  return (
    <globalContext.Provider value={{ global, setGlobal }}>
      {props.children}
    </globalContext.Provider>
  );
}

export { GlobalContextProvider, globalContext };
