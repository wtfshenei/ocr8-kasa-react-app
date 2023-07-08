import React, { useState } from 'react';
import logements from "../../assets/logements.json"
import Card from './Card/Card';

const Properties = () => {
    const [dataProperties, setDataProperties] = useState(logements);

    return (
        <div className='properties-container'>
            <ul>
                {dataProperties
                    .map((property) => (
                        <Card key={property.id} property={property} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Properties;