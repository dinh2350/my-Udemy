import React from "react";
import Logo from "./Logo";
import Categories from "./Categories";
import Search from "../General/Search";
import BusinessTeach from "./BusinessTeach";
import Cart from "./Cart";
import LoginSignUp from "../General/Button.js";
const Header = props => {
  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        <Categories />
        <Search />
        <BusinessTeach> test1 </BusinessTeach>
        <BusinessTeach> test2 </BusinessTeach>
        <Cart />
        <LoginSignUp>Login</LoginSignUp>
        <LoginSignUp>Sign Up</LoginSignUp>
      </div>
    </header>
  );
};

export default Header;
