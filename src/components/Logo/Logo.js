import React from 'react';

import burgerLogo from '../../assets/Images/burger-logo.png';
import  './Logo.css';

const logo = (props) => (
    <div>
        <img 
        // style={{height:"auto", width: "100px" }}
        src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;
// style={{width: "100px", height: "auto"}} 