import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyProjectStyled = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  padding: 50px 0 15px 0;

  .title {
    font-size: ${(props) => props.theme.fontSizes.regular};
    text-align: center;
    margin: 20px 0 40px 0;
  }

  .images-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
  }

  .go-to-project {
    text-decoration: underline;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    padding: 20px;
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.regular};
  }

  .project {
    margin: 30px;
    max-width: 200px;
  }
  .main-project {
    text-align: center;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 47px;
    margin: 0 auto;
    font-size: ${(props) => props.theme.fontSizes.regular};
    max-width: 800px;
    line-height: 1.5;

    &__title {
      font-weight: ${(props) => props.theme.fontWeigth.bold};
      font-size: ${(props) => props.theme.fontSizes.regular};
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
      margin: 0 auto;
    }

    &__technologies {
      font-size: ${(props) => props.theme.fontSizes.regular};
    }
  }

  @media (min-width: 640px) {
    .main-project {
      justify-content: center;
    }
  }
`;

export default MyProjectStyled;
