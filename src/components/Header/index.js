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
        <BusinessTeach> Udemy For Business </BusinessTeach>
        <BusinessTeach> Teach on Udemy </BusinessTeach>
        <Cart />
        <LoginSignUp styling="login">Log In</LoginSignUp>
        <LoginSignUp styling="signup">Sign Up</LoginSignUp>
      </div>
    </header>
  );
};

export default Header;
