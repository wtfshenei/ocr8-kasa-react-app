import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from "../../../assets/logements.json"
import Housing from '../../../pages/Housing/Housing';
import Error404 from '../../../pages/Error404/Error404';

const HouseCheck = () => {
    const { id } = useParams();
    const [properties] = useState(logements);

    const house = properties.find(house => house.id === id);

    if (house) {
        return <Housing id={id} />;
    } else {
        return <Error404 />;
    }
};

export default HouseCheck;