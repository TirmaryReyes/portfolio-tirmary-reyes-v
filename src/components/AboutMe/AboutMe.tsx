import AboutMeStyled from "./AboutMeStyled";

const AboutMe = (): React.ReactElement => {
  return (

    <AboutMeStyled id="about-me">
      <img
        className="photo"
        src="/images/photo-tirmary.svg"
        alt="tirmary img"
        height={250}
        width={305}
      />

      <h2>About Me</h2>

      <p>
        I am a passionate web developer with a background in System Engineering
        and experience from a web development bootcamp. I constantly strive to
        expand my knowledge and stay up-to-date with the latest trends in the
        field. I focus on delivering high-quality results, working in agile and
        collaborative environments. I believe in the importance of open
        communication and teamwork. Moreover, I strongly support the principles
        of writing maintainable code and ensuring scalability
      </p>

    <AboutMeStyled>
      <div className="main-container">
        <span className="main-container__description">
          Systems Engineer with a web development bootcamp background.
        </span>
        <article className="main-container__explication">
          Dedicated to writing maintainable code and prioritizing rigorous
          testing for reliability, while consistently pursuing further
          knowledge.
        </article>
        <div className="profession">
          <img
            className="profession__graduation-cap"
            src="/images/graduation-cap.svg"
            alt="graduation hat"
            width={48}
            height={48}
          />
          <span className="profession__studies">
            Full Stack Developer, ISDI CODERS, Barcelona, Spain 2023.
            <span className="profession__profession">
              Systems Engineer, IUP “Santiago Mariño”, Venezuela, 2014.
            </span>
          </span>
        </div>
      </div>
    </AboutMeStyled>
  );
};

export default AboutMe;
