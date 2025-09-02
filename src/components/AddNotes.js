// import React from 'react'
import { useState ,useContext} from "react";
import noteContext from "../context/notes/noteContext";


const AddNotes = (props) => {
    const context = useContext(noteContext);
    // eslint-disable-next-line
    const {notes,addNotes} = context;
    const[note,setNote] = useState({title: "",description: "",tag: ""})
    const handleClick = (e) => {
        e.preventDefault();
        addNotes(note.title,note.description,note.tag);
        props.showAlert("Added Successfully","success");
        setNote({title: "",description: "",tag: ""});
    }
    const onChange = (e) => {
        setNote({...note,[e.target.name]: e.target.value})
    }
  return (
    <div>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="email" className="form-control" id="title" name="title" aria-describedby="emailHelp" value={note.title} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input type="text" className="form-control" id="description" name="description" value={note.description} onChange={onChange}/>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={onChange}/>
          </div>
          
          <button disabled={note.title.length < 5 || note.description.length <5} type="submit" className="btn btn-primary" onClick={handleClick}>Add Note</button>
        </form>
      </div>
    </div>
  )
}

export default AddNotes
