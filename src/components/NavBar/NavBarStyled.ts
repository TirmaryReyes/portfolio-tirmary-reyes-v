import styled from "styled-components";

const NavBarStyled = styled.nav`
  padding: 15px 0 15px 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 40px;
  background-color: #1a6173;

  @media screen and (min-width: 481px) {
    justify-content: space-between;
    padding: 15px 20px;
  }
`;

export default NavBarStyled;
