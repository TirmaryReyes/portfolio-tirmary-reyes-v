import styled from "styled-components";

const AboutMeStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.primaryLight};
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export default AboutMeStyled;
