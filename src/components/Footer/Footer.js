import React from 'react';

import Aux from '../../hoc/Aux/Aux';

const Footer = () => { 
      
      const year = new Date().getFullYear();

        return (  
            <Aux>
                <footer className="footer">
                    <p>Copyright © {year}</p>
                </footer>
            </Aux>
        );
    }

 
export default  Footer;