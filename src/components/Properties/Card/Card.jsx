import React from "react";
import { Link } from "react-router-dom";

const Card = ({ property }) => {
  return (
    <li className="card">
      <img src={property.cover} alt={property.title} />
      <Link to={`/logement/${property.id}`}>
        <div className="gradient">
          <h4 className="card-title">{property.title}</h4>
        </div>
      </Link>
    </li>
  );
};

export default Card;
