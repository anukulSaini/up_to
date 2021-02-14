import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {
const [note,setNote] = useState({
     title : "",
     content : ""
    })

    const InputEvent = (event) =>{
        // const value = event.target.value;
        // const name = event.target.name;
//Object Destructuring....

         const {name,value} = event.target;

         setNote((prevData)=>{
            return {
                ...prevData,
                 [name]:value,
            }
         });
           console.log(note);
    }

    const anukulhandle = ()=> {
        props.passNote(note);
    }

    
    return (
        <div className="main_note">
               <form>
                 <input 
                   type="text" 
                   name="title"
                   value={note.title}  
                   onChange={InputEvent} 
                   placeholder="Title" 
                   autoComplete="off">
                 </input>
                   <textarea 
                    rows=""
                    column=""
                    name="content"
                    value={note.content}
                    onChange={InputEvent}
                    placeholder="Write a note">
                   </textarea>
               </form>
           
               <Button onClick={anukulhandle}>
                   <AddIcon className="plus_sign"></AddIcon>
               </Button>
        </div>
    );
}

export default CreateNote;