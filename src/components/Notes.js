import React, { useContext } from 'react'
import NoteContext from '../context/notes/NoteContext'
import Noteitem from './NotesItem';
// import AddNote from './AddNote';
// import Noteitem from './NoteItem';


const Notes = () => {
    const notes = useContext(NoteContext);
    // const {notes, setNotes} = context;
    return (
        <>
        {/* <AddNote /> */}
        <div className="row my-3">
            <h2>Your Notes</h2>
            <div className=" row">
            {notes.map((note) => {
                return <Noteitem key ={note._id}  title={note.title} description={note.description} />
            })}

        </div>
        </div>
        </>
    )
}

export default Notes