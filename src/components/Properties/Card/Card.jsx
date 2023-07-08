import React from 'react';

const Card = ({property}) => {
    return (
        <li className='card'>
            <img src={property.cover} alt={property.title} />
            <div className="gradient">
                <h4 className='card-title'>{property.title}</h4>
            </div>
        </li>
    );
};

export default Card;