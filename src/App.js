//By Anukul Saini
import React, { useState } from 'react';
import Aux from './hoc/Aux/Aux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'; 
import CreateNote from './components/CreateNote/CreateNote';
import Note from './components/Note/Note';

function App() {

  const [addItem,setAddItem] = useState([]);
  
  const addNote = (note) =>{
    alert ("ok");
    setAddItem((prevData) =>{
      return [...prevData,note];
    });
  };

  return (
    <Aux>
         <Header></Header>
         <CreateNote passNote ={addNote}></CreateNote>
         <Note></Note>
         <Footer></Footer>
    </Aux>
  );
}

export default App;
