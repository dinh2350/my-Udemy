import React from "react";

const Button = props => {
  return (
    <div className={`header__button`}>
      <button className={`header__buttonContent ${props.styling}`}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
