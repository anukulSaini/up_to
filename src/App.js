//By Anukul Saini
import React from 'react';
import Aux from './hoc/Aux/Aux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; 
import CreateNote from './components/CreateNote/CreateNote';
import Note from './components/Note/Note';

function App() {
  return (
    <Aux>
         <Header></Header>
         <CreateNote></CreateNote>
         <Note></Note>
         <Footer></Footer>
    </Aux>
  );
}

export default App;
