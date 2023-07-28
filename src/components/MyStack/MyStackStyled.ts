import styled from "styled-components";

const MyStackStyled = styled.article`
  margin-top: 10px;
  width: 100%;

  .title-myStack {
    padding: 20px;
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: ${(props) => props.theme.fontWeigth.bold};
    color: ${(props) => props.theme.colors.primary};

    @media screen and (min-width: 500px) {
      text-align: center;
    }
  }

  .logo-stack {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 40px 15px;
    gap: 15px;
  }

  @media (max-width: 320px) {
    .logo-stack {
      display: block;
    }
  }
`;

export default MyStackStyled;
