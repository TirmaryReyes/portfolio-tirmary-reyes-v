const ProfessionalOpinions = (): React.ReactElement => {
  return (
    <>
      <h2 className="title-section">Professional Opinions</h2>
      <img
        className="diego-photo"
        src="/images/diego-photo.jpg"
        alt="diego img"
        height={48}
        width={48}
      />
      <a
        href="https://www.linkedin.com/in/diegocallegari"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit LinkedIn Profile
      </a>

      <span
        className="
team-opinions"
      >
        Tirmary is a very focused person with an exceptional eye for detail. We
        have worked together building CRUD web applications. Her positive
        attitude and concern for the group is truly commendable.
      </span>
    </>
  );
};

export default ProfessionalOpinions;
