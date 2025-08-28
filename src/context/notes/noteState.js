import { useState } from "react";


import NoteContext from "./noteContext";

const NoteState = (props) => {
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

    const notesIntial = [
        {
            "_id": "68aab5154651d2940249a381",
            "user": "68a37bb9e628e972b36b3116",
            "title": "My Title Updated ",
            "description": "Please wake up early updated",
            "tag": "jai baba ki",
            "date": "2025-08-24T06:45:41.801Z",
            "__v": 0
        },
        {
            "_id": "68ad86e62785cea524e3a5e8",
            "user": "68a37bb9e628e972b36b3116",
            "title": "My title ",
            "description": "Please Wake Up early",
            "tag": "jai baba ki",
            "date": "2025-08-26T10:05:26.233Z",
            "__v": 0
        },
        {
            "_id": "68aab5154651d2940249a381",
            "user": "68a37bb9e628e972b36b3116",
            "title": "My Title Updated ",
            "description": "Please wake up early updated",
            "tag": "jai baba ki",
            "date": "2025-08-24T06:45:41.801Z",
            "__v": 0
        },
        {
            "_id": "68ad86e62785cea524e3a5e8",
            "user": "68a37bb9e628e972b36b3116",
            "title": "My title ",
            "description": "Please Wake Up early",
            "tag": "jai baba ki",
            "date": "2025-08-26T10:05:26.233Z",
            "__v": 0
        },
        {
            "_id": "68aab5154651d2940249a381",
            "user": "68a37bb9e628e972b36b3116",
            "title": "My Title Updated ",
            "description": "Please wake up early updated",
            "tag": "jai baba ki",
            "date": "2025-08-24T06:45:41.801Z",
            "__v": 0
        },
        {
            "_id": "68ad86e62785cea524e3a5e8",
            "user": "68a37bb9e628e972b36b3116",
            "title": "My title ",
            "description": "Please Wake Up early",
            "tag": "jai baba ki",
            "date": "2025-08-26T10:05:26.233Z",
            "__v": 0
        }
    ]
    const [notes,setNotes] = useState(notesIntial);
    return (
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState