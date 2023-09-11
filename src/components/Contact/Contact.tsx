import ContactStyled from "./ContactStyled";

const Contact = (): React.ReactElement => {
  return (
    <ContactStyled>
      <span className="main-title">Let&rsquo;s connect!</span>

      <span className="section-mail">E-mail:</span>
      <a className="nav-link" href="mailto:reyestirmary@gmail.com">
        reyestirmary@gmail.com
      </a>

      <span className="section-social"> Social media accounts</span>
      <div className="social-icons">
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/tirmary-reyes/"
        >
          <img
            className="logo-linkedin"
            src="/images/linkedin.svg"
            alt="logo linkedin"
            width={38}
            height={45}
          />
        </a>
        <a className="twitter" href="https://twitter.com/TirmaryR">
          <img
            className="logo-twitter"
            src="/images/x-twitter.svg"
            alt="logo twitter"
            width={38}
            height={45}
          />
        </a>
        <a className="github" href="https://github.com/TirmaryReyes">
          <img
            className="logo-github"
            src="/images/githubLogo.svg"
            alt="logo github"
            width={38}
            height={45}
          />
        </a>
      </div>
    </ContactStyled>
  );
};

export default Contact;
