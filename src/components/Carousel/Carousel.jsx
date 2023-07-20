import React, { useState } from "react";
import arrowLeft from "./arrow_left.png";
import arrowRight from "./arrow_right.png";

const Carousel = ({ pictures }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animSlide, setAnimSlide] = useState(false);

  /**
   * Change la slide du carousel en fonction du sens de la flèche cliquée.
   * Boucle le carousel si à une limite de longueur du tableau contenant les images.
   * Active puis désactive au bout de 500ms l'animation de changement de slide.
   **/
  const slideNavigation = (direction) => {
    setAnimSlide(true);
    setTimeout(() => {
      setAnimSlide(false);
      if (direction === "left") {
        setCurrentSlide((prevSlide) =>
          prevSlide === 0 ? pictures.length - 1 : prevSlide - 1
        );
      } else if (direction === "right") {
        setCurrentSlide((nextSlide) =>
          nextSlide === pictures.length - 1 ? 0 : nextSlide + 1
        );
      }
    }, 500);
  };

  return (
    <div className="carousel-container">
      {pictures.length > 1 && (
        <div className="arrow-positioning">
          <button
            className="arrow-left"
            onClick={() => slideNavigation("left")}
          >
            <img src={arrowLeft} alt="Flèche gauche" className="arrow" />
          </button>
          <button
            className="arrow-right"
            onClick={() => slideNavigation("right")}
          >
            <img src={arrowRight} alt="Flèche droite" className="arrow" />
          </button>
        </div>
      )}
      <div className={`slide ${animSlide ? "fade-out" : ""}`}>
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
