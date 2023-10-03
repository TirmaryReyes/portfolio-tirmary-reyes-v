import styled from "styled-components";

const FooterStyled = styled.footer`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 15px;
  font-weight: ${(props) => props.theme.fontWeigth.semibold};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 150px 10px 15px 20px;
  text-align: center;
`;

export default FooterStyled;
