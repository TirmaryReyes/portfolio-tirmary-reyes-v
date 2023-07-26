import AboutMeStyled from "./AboutMeStyled";

const AboutMe = (): React.ReactElement => {
  return (
    <AboutMeStyled>
      <img
        className="photo"
        src="/images/photo-tirmary.svg"
        alt="tirmary img"
        height={250}
        width={305}
      />
      <div className="about-title">
        <h2>About Me</h2>
      </div>
      <p>
        I am a passionate web developer with a background in System Engineering
        and experience from a web development bootcamp. I constantly strive to
        expand my knowledge and stay up-to-date with the latest trends in the
        field. I focus on delivering high-quality results, working in agile and
        collaborative environments. I believe in the importance of open
        communication and teamwork. Moreover, I strongly support the principles
        of writing maintainable code and ensuring scalability
      </p>
    </AboutMeStyled>
  );
};

export default AboutMe;
