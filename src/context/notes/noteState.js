import { useState } from "react";


import NoteContext from "./noteContext";

const NoteState = (props) => {
    const host = 'http://localhost:5000';
    // const s1 = {
    //     "name" : "rana",
    //     "class": "4A"
    // }
    // const [state,setState] = useState(s1)
    // const update = () => {
    //     setTimeout(() => {
    //         setState({
    //         "name" : "Karan",
    //         "class": "Google"
    //     })

    //     }, 1500);
    // }

    const notesIntial = [];
    //get ALL notes
    const getNotes = async() => {

        //TODO API CALL(addNotes API which we created in backend)
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhhMzdiYjllNjI4ZTk3MmIzNmIzMTE2In0sImlhdCI6MTc1NTYyNjY5NX0.BfHvza2mwezqJbnJQeAaJzxHFjkMkKgZ3hgyRxOlRCg"
            }
        });
        const json = await response.json();
        console.log(json);
        setNotes(json);
        
    }




    //edit a note
    const editNotes = async(id,title,description,tag) => {
        //TODO API CALL(update note API which we created in backend)

        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhhMzdiYjllNjI4ZTk3MmIzNmIzMTE2In0sImlhdCI6MTc1NTYyNjY5NX0.BfHvza2mwezqJbnJQeAaJzxHFjkMkKgZ3hgyRxOlRCg"
            },
            body: JSON.stringify({title,description,tag})
        });
        const json = await response.json();
        


        //logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if(element.id === id){
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
            
        }

    }
    //add a note
    const addNotes = async(title,description,tag) => {

        //TODO API CALL(addNotes API which we created in backend)
        const response = await fetch(`${host}/api/notes/addnote`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhhMzdiYjllNjI4ZTk3MmIzNmIzMTE2In0sImlhdCI6MTc1NTYyNjY5NX0.BfHvza2mwezqJbnJQeAaJzxHFjkMkKgZ3hgyRxOlRCg"
            },
            body: JSON.stringify({title,description,tag})
        });
        console.log("Adding a new Note")
        // const note = {
        //     "_id": "68ad86e62785cea524e3a5e9",
        //     "user": "68a37bb9e628e972b36b3119",
        //     "title": title,
        //     "description": description,
        //     "tag": tag,
        //     "date": "2025-08-26T10:05:26.233Z",
        //     "__v": 0
        // };
        const savedNotes = await response.json();
        setNotes(notes.concat(savedNotes));
    }
    //delete a note
    const deleteNotes = async(id) => {
        //TODO API CALL(delteNote API which we created in backend)
         const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method: "DELETE",
            headers: {
                "Content-Type" : "application/json",
                "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjhhMzdiYjllNjI4ZTk3MmIzNmIzMTE2In0sImlhdCI6MTc1NTYyNjY5NX0.BfHvza2mwezqJbnJQeAaJzxHFjkMkKgZ3hgyRxOlRCg"
            },
        });
        const json = await response.json();
        console.log(json);
        console.log("Deleting the note with id:" + id);
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNotes);


    }
    const [notes,setNotes] = useState(notesIntial);
    return (
        <NoteContext.Provider value={{notes,addNotes,editNotes,deleteNotes,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState