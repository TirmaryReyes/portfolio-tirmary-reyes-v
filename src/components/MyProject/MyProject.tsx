const MyProject = (): React.ReactElement => {
  return (
    <>
      <h1>Currently working on</h1>
      <a
        href="https://tirmary-reyes-final-project-front.netlify.app/home"
        target="_blank"
        rel="noopener noreferrer"
      >
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

        <span className="title-project">Go to project</span>
      </a>
      <p className="project description">
        Sand Rose Plant Deco is a user-friendly CRUD application that allows
        users to add, edit, and delete their plant collection. It leverages
        technologies such as React, Redux, TypeScript, MongoDB, Express, and
        Netlify to provide a seamless user experience.
      </p>
    </>
  );
};

export default MyProject;
