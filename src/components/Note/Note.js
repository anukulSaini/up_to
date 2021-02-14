import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
 
const Note = (props) => {

    // const deleteHandler = () =>{
    //     props.deleteHandler(props.id);
    // }

    return ( 
        <Aux>
            <div className="note">
               <h1>{props.value}</h1>
               <p>
                   {props.content}
               </p>
               <button className="btn" onClick={() => props.deleteHandler(props.id)}>
               <DeleteOutlineIcon className="deleteIcon"/>
               </button>
            </div>
        </Aux>
     );
}
 
export default Note;