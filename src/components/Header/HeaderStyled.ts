import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  width: 100%;
  justify-content: left;
  align-items: start;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primaryLight};

  .main-title {
    &__msg {
      font-weight: bold;
      font-size: ${(props) => props.theme.fontSizes.medium};
    }

    &__name {
      font-weight: ${(props) => props.theme.fontWeigth.regular};
      margin: 13px;
    }

    &__profession {
      margin: 30px;
    }
  }

  .image-logo {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
  }
`;

export default HeaderStyled;
