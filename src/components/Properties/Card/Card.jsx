import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({property}) => {
    return (
        <Link to={`/housing/${property.id}`}>
            <li className='card'>
                <img src={property.cover} alt={property.title} />
                <div className="gradient">
                    <h4 className='card-title'>{property.title}</h4>
                </div>
            </li>
        </Link>
    );
};

export default Card;