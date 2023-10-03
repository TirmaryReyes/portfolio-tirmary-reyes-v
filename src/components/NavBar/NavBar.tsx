import NavBarStyled from "./NavBarStyled";

const NavBar = (): React.ReactElement => {
  return (
    <NavBarStyled>
      <div className="main-navBar">
        <a className="nav-link" href="#my-project-section">
          Project
        </a>
        <a className="nav-link" href="#contact-section">
          Contact
        </a>
      </div>
    </NavBarStyled>
  );
};

export default NavBar;
