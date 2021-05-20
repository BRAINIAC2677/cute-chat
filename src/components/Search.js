import React, { useState, useContext } from "react";
import { db } from "../services/firebase";
import SearchResult from "./SearchResult";
import { styleContext } from "./styleContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  /* console.log("Search Component"); */

  const { myStyle, setMyStyle } = useContext(styleContext);
  const { searchIsOn } = myStyle;
  const [inpVal, setInpVal] = useState("");
  const [userBar, setUserBar] = useState([]);
  function handleChange(event) {
    setInpVal(event.target.value);
  }

  function handleSearch() {
    /* console.log("handleSearch clicked."); */

    if (inpVal) {
      /* console.log(`after setMyStyle: ${myStyle}`); */
      db.collection("cute_users")
        .where("name", "==", inpVal.trim())
        .get()
        .then((snapShot) => {
          let tempUserBars = [];

          snapShot.forEach((doc) => {
            tempUserBars.push(<SearchResult key={doc.id} info={doc.data()} />);
          });
          setUserBar(tempUserBars);
          setMyStyle((prevMyStyle) => {
            return { ...prevMyStyle, searchIsOn: true };
          });
          setInpVal("");
        });
    }
  }

  return (
    <div className="search">
      <input
        className="pressed"
        value={inpVal}
        placeholder="Search"
        onChange={(event) => handleChange(event)}
      />
      <button className="rounded-btn elevated" onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
      <div
        className="search-results"
        style={searchIsOn ? { display: "block" } : { display: "none" }}
      >
        {userBar.length === 0 ? <div>No Matched Result</div> : userBar}
      </div>
    </div>
  );
}

export default Search;
