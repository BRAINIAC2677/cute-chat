import React from "react";

function Text(props) {
  const { body, time, author } = props.info;

  return (
    <div>
      <p>{author}</p>
      <p>{time}</p>
      <h1>{body}</h1>
    </div>
  );
}

export default Text;
