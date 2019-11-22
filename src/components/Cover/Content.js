import React from "react";
import Search from "../General/Search";
const Content = props => {
  return (
    <div className="cover__content">
      <div className="cover__local">
        <h2>Your best deal yet</h2>
        <p>
          New skills from $9.99? Now that's smart shopping. Black Friday savings
          end Nov. 29.
        </p>
        <Search styling={true} />
      </div>
    </div>
  );
};

export default Content;
