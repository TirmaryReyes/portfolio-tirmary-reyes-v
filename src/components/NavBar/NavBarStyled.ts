import styled from "styled-components";

const NavBarStyled = styled.nav`
  padding: 15px 15px 15px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: end;
  gap: 40px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeigth.bold};

  @media (min-width: 481px) {
    justify-content: end;
    padding: 20px;
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
