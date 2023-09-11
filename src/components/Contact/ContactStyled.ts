import styled from "styled-components";

const ContactStyled = styled.article`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeigth.bold};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 10px 10px 10px;
  gap: 20px;
  margin-left: 10px;
  text-align: center;

  .main-title {
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${(props) => props.theme.fontSizes.regular};
    font-weight: ${(props) => props.theme.fontWeigth.bold};
  }

  .nav-link {
    text-decoration: underline;
  }

  .section-main,
  .section-social {
    font-size: ${(props) => props.theme.fontSizes.regular};
    font-weight: ${(props) => props.theme.fontWeigth.bold};
  }

  .img {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
    flex-direction: column;
  }

  .linkedin,
  .twitter,
  .github {
    margin-right: 30px;
  }
`;

export default ContactStyled;
