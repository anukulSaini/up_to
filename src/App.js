import React from 'react';
import Aux from './hoc/Aux/Aux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; 
import CreateNote from './components/CreateNote/CreateNote';

function App() {
  return (
    <Aux>
         <Header></Header>
         <Footer></Footer>
         <CreateNote></CreateNote>
    </Aux>
  );
}

export default App;
