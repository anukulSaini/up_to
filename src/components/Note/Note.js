import React from 'react';
import Aux from '../../hoc/Aux/Aux';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
 
const Note = () => {
    return ( 
        <Aux>
            <div className="note">
               <h1>Title</h1>
               <p>
                   This is the content
               </p>
               <button className="btn">
               <DeleteOutlineIcon className="deleteIcon"/>
               </button>
            </div>
        </Aux>
     );
}
 
export default Note;