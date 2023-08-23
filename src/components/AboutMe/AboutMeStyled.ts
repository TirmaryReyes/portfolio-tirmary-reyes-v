import styled from "styled-components";

const AboutMeStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
  background-color: #1a6173;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media (min-width: 481px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }
  }

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 16px;
  }

  .photo {
    display: block;
    max-width: 100%;
  }

  p {
    padding: 20px;
    max-width: 800px;
    margin: 0;
  }
`;

export default AboutMeStyled;
