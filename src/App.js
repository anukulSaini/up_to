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
    // alert ("ok");
    setAddItem((prevData) =>{
      return [...prevData,note];
    });
  };

  // const deleteHandler =(id) =>{

  //   const prevArray = addItem.filter( (val, i) => i !== id);
  //     // setAddItem((prevData)=>{
  //     //   prevData.filter((currentData,index)=>{
  //     //     return index !== id;
  //     //   })
  //     // })
  //     setAddItem(prevArray);
  // }

//  setAddItem((oldData)=>{
//       oldData.filter((val,i)=>{
//         return i !== id;
//       })


//  });


const deleteHandler =(id)=>{
 setAddItem((oldData)=>
      oldData.filter((val,i)=>{
        return i !== id;
      })
 )
};

  return (
    <Aux>
         <Header></Header>
         <CreateNote passNote ={addNote}></CreateNote>
         {addItem.map((val,index)=>{
             return (<Note
             key={index}
             id={index}
             value={val.title}
             content={val.content}
             deleteHandler={deleteHandler}/>
         );})}
         <Footer></Footer>
    </Aux>
  );
}

export default App;
