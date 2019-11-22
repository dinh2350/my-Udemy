import React from "react";
import Header from "./Header/index";
import Cover from "../components/Cover/index";
import Sources from "../components/Sources/index";
const Udemy = props => {
  return (
    <>
      <Header />
      <main>
        <Cover />
        <Sources />
      </main>
    </>
  );
};

export default Udemy;
