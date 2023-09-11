import AboutMeStyled from "./AboutMeStyled";

const AboutMe = (): React.ReactElement => {
  return (
    <AboutMeStyled>
      <div className="main-container">
        <span className="main-container__description">
          Systems Engineer with a web development bootcamp background.
        </span>
        <article className="main-title__explication">
          Dedicated to writing maintainable code and prioritizing rigorous
          testing for reliability, while consistently pursuing further
          knowledge.
        </article>

        <img
          className="main-container__graduation-cap"
          src="/images/graduation-cap.svg"
          alt="graduation hat"
          width={48}
          height={48}
        />
        <span className="main-container__studies">
          Full Stack Developer, ISDI CODERS, Barcelona, Spain 2023.
          <span className="main-container__profession">
            Systems Engineer, IUP “Santiago Mariño”, Venezuela, 2014.
          </span>
        </span>
      </div>
    </AboutMeStyled>
  );
};

export default AboutMe;
