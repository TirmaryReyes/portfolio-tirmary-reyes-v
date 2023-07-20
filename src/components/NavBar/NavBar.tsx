import React from "react";

import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <a href="/">
        <img
          className="home"
          src="/images/home.svg"
          alt="home"
          height={30}
          width={30}
        />
      </a>
      <a href="/about">
        <img
          className="about me"
          src="/images/about.svg"
          alt="about-me"
          height={30}
          width={30}
        />
      </a>
      <a href="/stack">
        <img
          className="stack"
          src="/images/stack.svg"
          alt="my-stack"
          height={30}
          width={30}
        />
      </a>
      <a href="/project">
        <img
          className="my-project"
          src="/images/project.svg"
          alt="my-project"
          height={30}
          width={30}
        />
      </a>
      <a href="/contact">
        <img
          className="contact-me"
          src="/images/contact.svg"
          alt="contact-me"
          height={30}
          width={30}
        />
      </a>
    </NavBarStyled>
  );
};

export default NavBar;
