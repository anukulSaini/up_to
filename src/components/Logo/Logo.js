import React from 'react';
//Anukul Logo
import burgerLogo from '../../assets/Images/download.png';
import  './Logo.css';

const logo = (props) => (
    <div className="Logo">
        <img src={burgerLogo} alt="MyBurger" />
        <h1>What are you up to...?</h1>
    </div>
);

export default logo;
 