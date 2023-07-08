import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Error404 from '../../pages/Error404/Error404';
import Housing from '../../pages/Housing/Housing';

const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/housing/:id" element={<Housing />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routeur;