import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  gap: 60px;
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primaryLight};

  @media (min-width: 481px) {
    .main-title {
      text-align: center;
      margin: 0 auto;
    }
  }

  .main-title {
    &__msg {
      font-size: ${(props) => props.theme.fontSizes.bold};
      font-weight: ${(props) => props.theme.fontWeigth.regular};
    }

    &__name {
      color: #87ceeb;
      font-size: 30px;
      font-weight: ${(props) => props.theme.fontWeigth.medium};
      margin: 13px;
    }

    &__profession,
    &__field {
      color: #fff;
      margin: 10px 15px;
      font-size: ${(props) => props.theme.fontSizes.medium};
      font-weight: ${(props) => props.theme.fontWeigth.bold};
      gap: 20px;
      display: flex;
      align-items: center;
    }
  }

  .main-title__profession {
    display: flex;

    justify-content: flex-end;
  }

  .graduation-cap {
    margin-right: 10px;
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
