import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = () => {
    return (
        <div className="main_note">
               <form>
                   <input type="text" placeholder="Title"></input>
                   <textarea rows="" column="" placeholder="Write a note"></textarea>
               </form>
               <Button>
                   <AddIcon className="plus_sign"></AddIcon>
               </Button>
        </div>
    );
}

export default CreateNote;