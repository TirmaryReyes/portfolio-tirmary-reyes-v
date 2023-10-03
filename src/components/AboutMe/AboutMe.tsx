import AboutMeStyled from "./AboutMeStyled";

const AboutMe = (): React.ReactElement => {
  return (
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
