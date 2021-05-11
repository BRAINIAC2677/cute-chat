import React, { useState } from "react";
const userContext = React.createContext();

function UserContextProvider(props) {
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {props.children}
    </userContext.Provider>
  );
}

export { UserContextProvider, userContext };
