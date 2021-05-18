import React, { useState } from "react";

const styleContext = React.createContext();

function StyleContextProvider(props) {
  const [myStyle, setMyStyle] = useState({
    searchIsOn: false,
    focused: -1,
    breakPoint: 1023,
  });

  return (
    <styleContext.Provider value={{ myStyle, setMyStyle }}>
      {props.children}
    </styleContext.Provider>
  );
}

export { StyleContextProvider, styleContext };
