import styled from "styled-components";

const ProfessionalOpinionsStyled = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};
  text-align: center;

  .title-wrapper {
    margin-top: 28px;
  }

  .title-section {
    font-weight: ${(props) => props.theme.fontWeigth.bold};
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fontSizes.regular};
    text-align: center;
    margin: 20px 0 40px 0;
  }

  .opinion-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 20px;
  }

  .opinion-content {
    font-size: ${(props) => props.theme.fontSizes.regular};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    border-radius: 20px;
  }

  .photo {
    margin-top: 15px;
    max-width: 108px;
    border-radius: 50%;
  }

  .name {
    font-weight: ${(props) => props.theme.fontWeigth.bold};
    color: ${(props) => props.theme.colors.secondary};
    margin-bottom: 10px;
  }

  .opinions {
    color: ${(props) => props.theme.colors.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    max-width: 400px;
    margin: 0 auto;
    line-height: 1.5;
  }

  .linkedin-link {
    color: ${(props) => props.theme.colors.secondary};
    text-decoration: none;
    font-weight: bold;
    padding: 20px;
    text-decoration: underline;
  }

  .star {
    color: #ccc;
    color: gold;
  }

  @media (min-width: 640px) {
    text-align: center;
  }
`;

export default ProfessionalOpinionsStyled;
