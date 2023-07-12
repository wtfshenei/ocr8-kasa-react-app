import React from "react";

const Rating = ({ rating }) => {
  const fullStars = rating;
  const emptyStars = 5 - fullStars;

  const displayStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <i key={`fullstar_${i}`} className="fa-solid fa-star fullstar"></i>
      );
    }

    for (let j = 0; j < emptyStars; j++) {
      stars.push(
        <i key={`emptystar_${j}`} className="fa-solid fa-star emptystar"></i>
      );
    }

    return stars;
  };

  return <div className="stars-display">{displayStars()}</div>;
};

export default Rating;
