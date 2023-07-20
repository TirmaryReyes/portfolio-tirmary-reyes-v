import styled from "styled-components";

const NavBarStyled = styled.nav`
  padding: 15px 0 15px 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 23px;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export default NavBarStyled;
