import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import ProfessionalOpinionsStyled from "./ProfessionalOpinionsStyled";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProfessionalOpinions = (): React.ReactElement => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const opinions = [
    {
      name: "Diego Callegari",
      imgSrc: "/images/diego-photo.jpg",
      content: `"Tirmary is a very focused person with an exceptional eye for detail. We have worked together building CRUD web applications. Her positive attitude and concern for the group is truly commendable."`,
      linkedIn: "https://www.linkedin.com/in/diegocallegari",
    },
    {
      name: "Anna Marrodán Pellicer",
      imgSrc: "/images/anna-photo.jpg",
      content: `"Having Tirmary as a student in the Full Stack Development Bootcamp has been a pleasure. Her journey through the Bootcamp has been characterised by her resilience and adaptability, as she approached both the curriculum and coding challenges with determination and eagerness to learn."`,
      linkedIn: "https://www.linkedin.com/in/anna-marrodan-pellicer/",
    },

    {
      name: "Gina Marieges Rosés",
      imgSrc: "/images/gina-photo.jpg",
      content: `"Tirmary is a fighter, a hard worker, resilient and a empathic woman. She always take's care of the team. It has truly been a privilege to have had the opportunity to collaborate with her."`,
      linkedIn: "https://www.linkedin.com/in/gina-marieges-roses-developer/",
    },
  ];

  return (
    <ProfessionalOpinionsStyled>
      <section className="title-container">
        <h2 className="title-section">Professional Opinions</h2>
      </section>
      <Carousel
        showThumbs={false}
        autoPlay
        interval={6000}
        showArrows
        selectedItem={0}
      >
        {opinions.map((opinion, index) => (
          <div key={index} className="opinions-slide">
            <div className="opinion-content">
              <img
                className="diego-photo"
                src={opinion.imgSrc}
                alt={opinion.name}
                height={48}
                width={48}
              />
              <span className="name">{opinion.name}</span>
              <div className="rating">
                {[1, 2, 3, 4, 5].map((value) => (
                  <FaStar
                    key={value}
                    className={value <= rating ? "star active" : "star"}
                    onClick={() => handleRatingChange(value)}
                  />
                ))}
              </div>
              <div className="opinions">
                <p>{opinion.content}</p>
                <a
                  className="linkedin-link"
                  href={opinion.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </ProfessionalOpinionsStyled>
  );
};

export default ProfessionalOpinions;
