import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Logo from '../Logo/Logo';
import './Header.css'

const Header = () =>{
    return (
         <Aux>
             <div className="header">
                <div className="Logo">
                <Logo/>
                </div>
             </div>
         </Aux>
    );
}
   
export default Header;