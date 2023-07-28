import styled from "styled-components";

const MyProjectStyled = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primaryLight};
  margin-top: 20px;

  .title {
    padding: 20px;
    margin-top: 20px;
  }

  .images-container {
    display: flex;
    justify-content: center;
    align-items: center; /* Centrar verticalmente las imágenes */
    margin-top: 20px;
    flex-wrap: wrap;
    padding: 20px;
  }

  .go-to-project {
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-weight: ${(props) => props.theme.fontWeigth.bold};
    margin: 10px;
    margin-top: 50px;
    max-width: 200px;
    text-align: center;
    padding: 20px;
  }

  .project {
    margin: 30px;
    max-width: 200px;
  }

  .project-description {
    padding: 20px;
    margin-top: 10px;
  }

  @media (min-width: 520px) {
    .images-container {
      justify-content: flex-start;
    }
  }
`;

export default MyProjectStyled;
