import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyProjectStyled = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  .title {
    font-size: ${(props) => props.theme.fontSizes.regular};
    text-align: center;
    margin: 20px 0 40px 34px;
  }

  .images-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
  }

  .go-to-project {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    margin: 12px 10px 10px 10px;
    padding: 20px;

    @media (min-width: 768px) {
      margin: 10px 20px 0;
    }
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes.regular};

    @media (min-width: 768px) {
      margin: 20px;
    }
  }

  .project {
    margin: 30px;
    max-width: 200px;

    @media (min-width: 768px) {
      margin: 30px 20px;
    }
  }

  .main__project-description {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    margin: 0 auto;
    font-size: 20px;
    max-width: 800px;
  }

  .main__project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    margin: 0 auto;
    font-size: 20px;
    max-width: 800px;
    font-size: ${(props) => props.theme.fontSizes.regular};
  }

  .project-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    margin: 0 auto;
  }

  .project-slide img {
    max-width: 100%;
    max-height: 100%;
  }

  @media (min-width: 520px) {
    .images-container {
      justify-content: flex-start;
    }
  }
`;

export default MyProjectStyled;
