import styled from "styled-components";

const MyProjectStyled = styled.div`
  min-height: 100vh;
  background-color: #1a6173;
  color: #fff;
  margin-top: 20px;

  .title {
    padding: 20px;
    margin-top: 20px;
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
