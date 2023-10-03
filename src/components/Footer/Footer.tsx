import FooterStyled from "./FooterStyled";

const Footer = (): React.ReactElement => {
  return (
    <FooterStyled>
      <p>Built, tested, and designed by </p>
      <p> Tirmary Reyes 🍀</p>
      <p>© {new Date().getFullYear()} All rights reserved.</p>
    </FooterStyled>
  );
};

export default Footer;
