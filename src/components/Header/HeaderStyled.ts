import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 10px;

  .image-container {
    width: 172px;
    height: 265px;
    margin-top: 20px;
    background-color: ${(props) => props.theme.colors.tertiary};
    font-weight: ${(props) => props.theme.fontWeigth.bold};
    font-size: ${(props) => props.theme.fontSizes.bold};
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 10px 10px 75px 75px;
    overflow: hidden;
    position: relative;

    &__photo {
      width: 250px;
      height: 176px;
      margin-top: 20px;
    }
  }
`;
export default HeaderStyled;
