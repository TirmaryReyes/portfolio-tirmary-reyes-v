import styled from "styled-components";

const AboutMeStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: ${(props) => props.theme.fontSizes.regular};
  color: ${(props) => props.theme.colors.secondary};
  padding: 20px;
  background-color: ${(props) => props.theme.colors.primary};

  .main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;

    @media (min-width: 481px) {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      padding: 20px;
    }

    &__graduation-cap {
      display: block;
      max-width: 100%;
    }

    &__studies {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      padding: 20px;
      max-width: 800px;
      font-weight: ${(props) => props.theme.fontWeigth.bold};
      font-size: ${(props) => props.theme.fontSizes.regular};
    }

    &__profession {
      font-weight: ${(props) => props.theme.fontWeigth.bold};
      font-size: ${(props) => props.theme.fontSizes.regular};
    }
  }
`;

export default AboutMeStyled;
