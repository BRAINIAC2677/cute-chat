import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { fire, db } from "../services/firebase";
import UserBarDm from "./UserBarDm";

function Search() {
  console.log("Search Component");

  const [inpVal, setInpVal] = useState("");
  const [userBar, setUserBar] = useState([]);
  function handleChange(event) {
    setInpVal(event.target.value);
  }

  function handleSearch() {
    console.log("handleSearch clicked.");

    if (inpVal) {
      db.collection("cute_users")
        .where("name", "==", inpVal.trim())
        .get()
        .then((snapShot) => {
          let tempUserBars = [];

          snapShot.forEach((doc) => {
            tempUserBars.push(<UserBarDm key={doc.id} info={doc.data()} />);
          });
          setUserBar(tempUserBars);
          setInpVal("");
        });
    }
  }

  return (
    <div>
      <TextField value={inpVal} onChange={(event) => handleChange(event)} />
      <button onClick={handleSearch}>khoj</button>
      {userBar}
    </div>
  );
}

export default Search;
