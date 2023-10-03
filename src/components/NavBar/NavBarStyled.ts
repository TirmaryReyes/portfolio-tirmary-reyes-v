import styled from "styled-components";

const NavBarStyled = styled.nav`
  width: 100%;

  .main-navBar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 30px;
    background-color: ${(props) => props.theme.colors.primary};
    padding: 20px 10px 10px 20px;
    color: ${(props) => props.theme.colors.secondary};
    font-weight: ${(props) => props.theme.fontWeigth.bold};
  }

  .nav-link {
    text-decoration: none;
    color: ${(props) => props.theme.colors.secondary};
    transition: border-bottom 0.1s ease-in-out;
  }

  .nav-link:hover {
    border-bottom: 2px solid #6d493b;
  }
`;

export default NavBarStyled;
