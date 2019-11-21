import React from "react";

const Button = props => {
  return (
    <div className="header__cart">
      <button>{props.children}</button>
    </div>
  );
};

export default Button;
