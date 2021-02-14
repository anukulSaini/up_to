import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

const [expand,setExpand] =useState(false);

const [note,setNote] = useState({
     title : "",
     content : ""
    });

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
        setNote({
            title : "",
            content : ""
           });
    }

    
    return (
        <div className="main_note"  onDoubleClick={()=>setExpand(false)}>
               <form>
                   {expand?
                 <input 
                   type="text" 
                   name="title"
                   value={note.title}  
                   onChange={InputEvent} 
                   placeholder="Title" 
                   autoComplete="off">
                 </input>
                 :null}
                   <textarea 
                    rows=""
                    column=""
                    name="content"
                    value={note.content}
                    onChange={InputEvent}
                    placeholder="Write a note"
                    onClick={()=>setExpand(true)}>
                   </textarea>
               </form>
           {expand?
               <Button onClick={anukulhandle}>
                   <AddIcon className="plus_sign"></AddIcon>
               </Button>
               :null}
        </div>
    );
}

export default CreateNote;