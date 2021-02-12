import React from 'react';

import burgerLogo from '../../assets/Images/burger-logo.png';
import  './Logo.css';

const logo = (props) => (
    <div>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;
 