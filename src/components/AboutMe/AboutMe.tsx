import AboutMeStyled from "./AboutMeStyled";

const AboutMe = (): React.ReactElement => {
  return (
    <AboutMeStyled>
      <div className="container">
        <div className="about-title">
          <p>
            Passionate web developer with System Engineering background and
            bootcamp experience. Committed to ongoing learning, staying current
            with trends. Emphasizes quality results, agility, and collaboration.
            Values open communication, teamwork, maintainable, scalable code.
          </p>
        </div>
      </div>
    </AboutMeStyled>
  );
};

export default AboutMe;
