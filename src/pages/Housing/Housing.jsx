import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';


const Housing = () => {
    const {id} = useParams();

    return (
        <div>
            <Header />
            <h1>Page de {id}</h1>
            {console.log(id)}
            <Footer />
        </div>
    );
};

export default Housing;