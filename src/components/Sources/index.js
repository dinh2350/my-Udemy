import React from "react";
import Intro from "./Intro";
import Sthree from "./Sthree";
import Sfive from "./Sfive";
const Sources = props => {
  return (
    <section className="sources">
      <div className="sources_introThree">
        <Intro />
        <Sthree />
      </div>
      <div>{/* <Sfive /> */}</div>
    </section>
  );
};

export default Sources;
