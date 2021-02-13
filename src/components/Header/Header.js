import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import Logo from '../Logo/Logo';
import './Header.css'

const Header = () =>{
    return (
         <Aux>
             <div className="header">
                <Logo/>
             </div>
         </Aux>
    );
}
   
export default Header;