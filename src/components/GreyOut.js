import React, { useContext } from "react";
import { styleContext } from "./styleContext";

function GreyOut() {
  const { myStyle } = useContext(styleContext);
  const { searchIsOn } = myStyle;
  console.log(`SearchIsOn: ${searchIsOn}`);
  return (
    <div
      className="greyout"
      style={searchIsOn ? { zIndex: "1" } : { zIndex: "-1" }}
    ></div>
  );
}

export default GreyOut;
