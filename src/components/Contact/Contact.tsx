const Contact = (): React.ReactElement => {
  return (
    <>
      <span className="main-title">Let&rsquo;s connect!</span>

      <span>E-mail</span>
      <a className="nav-link" href="mailto:reyestirmary@gmail.com">
        reyestirmary@gmail.com
      </a>

      <span> Social media accounts</span>
      <a className="linkedin" href="https://www.linkedin.com/in/tirmary-reyes/">
        <img
          className="logo-linkedin"
          src="/imagenes/linkedin.svg"
          alt="logo linkedin"
          width={38}
          height={45}
        />
      </a>
      <a
        className="twitter"
        href="https://www.twitter.com/https://twitter.com/TirmaryR"
      >
        <img
          className="logo-twitter"
          src="/imagenes/x-twitter.svg"
          alt="logo twitter"
          width={38}
          height={45}
        />
      </a>
      <a className="github" href="https://github.com/TirmaryReyes">
        <img
          className="logo-github"
          src="/imagenes/githubLogo.svg"
          alt="logo github"
          width={38}
          height={45}
        />
      </a>
    </>
  );
};
export default Contact;
