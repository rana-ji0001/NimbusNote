// import React from 'react'
import noteContext from "../context/notes/noteContext"
import { useContext, useEffect, useRef,useState } from "react";
import Noteitem from "./Noteitem";
import AddNotes from "./AddNotes";


function Notes() {
  const context = useContext(noteContext);
  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "" })


  const { notes, getNotes ,editNotes} = context;
  
  useEffect(() => {
    
    getNotes();
    // eslint-disable-next-line
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id,etitle:currentNote.title,edescription:currentNote.description,etag:currentNote.tag});
  }
  const ref = useRef(null);
  const refClose = useRef(null);
  const handleClick = (e) => {
    editNotes(note.id,note.etitle,note.edescription,note.etag);
    refClose.current.click();

  }
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  }
  return (
    <>
      <AddNotes />
      <button type="button"
        className="btn btn-primary d-none"
        ref={ref}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal">
        Launch demo modal
      </button>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button"
                className="btn-close"   // ✅ Bootstrap 5 replaces .close
                data-bs-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div className="modal-body">
              <form className='my-3'>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="email" className="form-control" id="etitle" name="etitle" aria-describedby="emailHelp" value={note.etitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal">Close</button>
              <button onClick={handleClick} type="button" className="btn btn-primary">Update Notes</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="row my-3">
          <h2>Your Notes</h2>
          {notes.map((note) => {
            return <Noteitem key={note._id} updateNote={updateNote} note={note} />;
          })}
        </div>
      </div>
    </>
  )
}

export default Notes
