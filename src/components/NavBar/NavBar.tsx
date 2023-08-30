import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <a className="nav-link" href="#project">
        Project
      </a>
      <a className="nav-link" href="contact">
        Contact
      </a>
    </NavBarStyled>
  );
};

export default NavBar;
