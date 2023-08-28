import styled from "styled-components";

const ProfessionalOpinionsStyled = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  margin-top: 10px;

  .title-wrapper {
    margin-top: 28px;
  }

  .title-section {
    font-weight: 700;
    margin: 10px;
    margin-top: 50px;
    max-width: 200px;
    text-align: center;
    margin-left: 30px;
    font-size: 16px;
    color: #1a6173;
    margin-bottom: 10px;
  }

  .opinion-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 20px;
  }

  .opinion-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    border-radius: 20px;
  }

  .diego-photo {
    margin-top: 15px;
    max-width: 48px;
    border-radius: 50%;
  }

  .name {
    font-weight: bold;
    color: #1a6173;
  }

  .opinions {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    border-radius: 10px;
    max-width: 400px;
    margin: 0 auto;
  }

  .linkedin-link {
    color: #1a6173;
    text-decoration: none;
    font-weight: bold;
    padding: 20px;
    text-decoration: underline;
  }

  .star {
    color: #ccc;
    color: gold;
  }
`;

export default ProfessionalOpinionsStyled;
