import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <a className="nav-link" href="#my-project-section">
        Project
      </a>
      <a className="nav-link" href="#contact-section">
        Contact
      </a>
    </NavBarStyled>
  );
};

export default NavBar;
