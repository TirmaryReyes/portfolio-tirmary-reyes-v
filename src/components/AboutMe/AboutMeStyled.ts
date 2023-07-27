import styled from "styled-components";

const AboutMeStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: #fff;
  padding: 20px;
  background-color: #1a6173;

  @media (max-width: 768px) {
    padding: 20px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    .about-title {
      display: flex;
      align-items: center;
      margin-top: 20px;
      font-size: 16px;
    }
  }

  .photo {
    display: block;
    margin: 0 auto;
    max-width: 100%;
  }
`;

export default AboutMeStyled;
