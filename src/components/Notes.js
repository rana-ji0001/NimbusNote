// import React from 'react'
import noteContext from "../context/notes/noteContext"
import { useContext, useEffect } from "react";
import Noteitem from "./Noteitem";
import AddNotes from "./AddNotes";


function Notes() {
    const context = useContext(noteContext);
    
    const {notes,getNotes} = context;
    // eslint-disable-next-line
    useEffect(() => {

      getNotes();
    },[]);
  return (
    <>
    <AddNotes/>
    <div>
      <div className="row my-3">
        <h2>Your Notes</h2>
        {notes.map((note) => {
          return <Noteitem key={note._id} note = {note}/>;
        })}
      </div>
    </div>
    </>
  )
}

export default Notes
