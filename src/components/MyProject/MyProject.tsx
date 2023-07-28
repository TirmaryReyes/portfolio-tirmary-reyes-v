import MyProjectStyled from "./MyProjectStyled";

const MyProject = (): React.ReactElement => {
  return (
    <MyProjectStyled>
      <h1 className="title">Currently working on</h1>
      <div className="images-container">
        <div className="images-wrapper">
          <img
            className="project"
            src="/images/currently-work.svg"
            alt="currently work"
            height={320}
            width={200}
          />
          <img
            className="project"
            src="/images/currently.svg"
            alt="currently work"
            height={320}
            width={200}
          />
          <img
            className="project"
            src="/images/form.svg"
            alt="currently work"
            height={320}
            width={200}
          />
        </div>

        <a
          className="go-to-project"
          href="https://tirmary-reyes-final-project-front.netlify.app/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Go to project</h2>
        </a>
      </div>
      <p className="project-description">
        Sand Rose Plant Deco: is a user-friendly CRUD application that allows
        users to add, edit, and delete their plant collection. It leverages
        technologies such as React, Redux, TypeScript, MongoDB, Express, and
        Netlify to provide a seamless user experience.
      </p>
    </MyProjectStyled>
  );
};

export default MyProject;
