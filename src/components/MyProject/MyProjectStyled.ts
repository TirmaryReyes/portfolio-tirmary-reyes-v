import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyProjectStyled = styled.div`
  min-height: 100vh;
  background-color: #1a6173;
  color: #fff;
  margin-top: 20px;
  padding: 20px;

  .title {
    padding: 20px;
    margin-top: 20px;
    margin-left: 20px;
  }

  .images-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    flex-wrap: wrap;
    padding: 20px;
  }

  .go-to-project {
    font-size: 16px;
    font-weight: 700;
    margin: 10px;
    margin-top: 50px;
    max-width: 200px;
    text-align: center;
    padding: 20px;
    margin-left: 20px;
  }

  h2 {
    text-align: left;
    padding: 20px;
    margin-left: 20px;
  }

  .project {
    margin: 30px;
    max-width: 200px;
  }

  .project-description {
    padding: 0 10px;
    max-width: 800px;
    margin: 0;
  }

  @media (max-width: 481px) {
    .project-description {
      margin: 0;
    }
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
