import React from "react";
import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled className="burger-menu">
      <div className="burger-menu__links">
        <a href="/">Home</a>
        <a href="/">About me</a>
        <a href="/">My stack</a>
        <a href="/">Project</a>
        <a href="/">Contact</a>
      </div>
      <div className="burger-menu__button"></div>
    </NavBarStyled>
  );
};

export default NavBar;
