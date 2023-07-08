import React from 'react';
import Navigation from './Navigation/Navigation';
import Logo from './Logo/Logo';

const Header = () => {
    return (
        <div className='header-container'>
            <Logo />
            <Navigation />
        </div>
    );
};

export default Header;