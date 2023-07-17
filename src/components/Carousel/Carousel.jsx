import React, { useState } from "react";
import arrowLeft from "./arrow_left.png";
import arrowRight from "./arrow_right.png";

const Carousel = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((nextSlide) =>
      nextSlide === pictures.length - 1 ? 0 : nextSlide + 1
    );
  };

  return (
    <div className="carousel-container">
      {pictures.length > 1 && (
        <div className="arrow-positioning">
          <button className="arrow-left" onClick={previousSlide}>
            <img src={arrowLeft} alt="Flèche gauche" className="arrow" />
          </button>
          <button className="arrow-right" onClick={nextSlide}>
            <img src={arrowRight} alt="Flèche droite" className="arrow" />
          </button>
        </div>
      )}
      <div className="slide">
        <img src={pictures[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <div className="compteur-container">
        <p className="compteur">
          {currentSlide + 1}/{pictures.length}
        </p>
      </div>
    </div>
  );
};

export default Carousel;
