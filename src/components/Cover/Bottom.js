import React from "react";
import Detail from "./Detail";
const Bottom = props => {
  return (
    <div className="cover__bottom">
      <div className="cover__bottomContent">
        <Detail />
        <Detail />
        <Detail />
      </div>
    </div>
  );
};

export default Bottom;
