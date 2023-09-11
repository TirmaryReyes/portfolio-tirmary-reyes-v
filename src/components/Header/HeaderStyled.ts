import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.regular};
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 10px;

  .image-container {
    width: 228px;
    height: 287px;
    margin-top: 20px;
    background-color: ${(props) => props.theme.colors.tertiary};
    font-weight: ${(props) => props.theme.fontWeigth.bold};
    font-size: ${(props) => props.theme.fontSizes.bold};
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    border-radius: 10px 10px 103px 97px;
    overflow: hidden;
    position: relative;

    &__photo {
      width: 250px;
      height: 228px;
      margin-top: 20px;
    }
  }
`;
export default HeaderStyled;
