import styled from "styled-components";

const AboutMeStyled = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  font-size: ${(props) => props.theme.fontSizes.regular};
  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};
  line-height: 1.5;

  .main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 18px;

    .main-title__explication {
      margin-left: 45px;
    }

    @media (min-width: 481px) {
      padding: 20px;
      max-width: 800px;
      margin: 0 auto;
    }

    @media (max-width: 768px) {
      padding: 20px;
    }

    .profession {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      &__graduation-cap {
        display: block;
        max-width: 100%;
      }

      &__studies {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        padding: 18px 36px 20px 20px;
        font-weight: ${(props) => props.theme.fontWeigth.bold};
        font-size: ${(props) => props.theme.fontSizes.regular};
      }

      &__profession {
        font-weight: ${(props) => props.theme.fontWeigth.bold};
        font-size: ${(props) => props.theme.fontSizes.regular};
      }
    }
  }
`;

export default AboutMeStyled;
