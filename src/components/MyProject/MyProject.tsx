import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MyProjectStyled from "./MyProjectStyled";

const MyProject = (): React.ReactElement => {
  const images = [
    "/images/currently-work.svg",
    "/images/currently.svg",
    "/images/form.svg",
  ];

  return (
    <MyProjectStyled>
      <h1 className="title">Currently working on</h1>
      <Carousel showThumbs={false} autoPlay interval={5000}>
        {images.map((image, index) => (
          <div key={index} className="project-slide">
            <img
              className="project"
              src={image}
              alt={`Currently working on ${index}`}
            />
          </div>
        ))}
      </Carousel>

      <a
        className="go-to-project"
        href="https://tirmary-reyes-final-project-front.netlify.app/home"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2>Go to project</h2>
      </a>

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
