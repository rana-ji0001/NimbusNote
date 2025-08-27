// import react, { useState } from "react";


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
    return(
        <NoteContext.Provider value={{}}>
            {props.children}
        </NoteContext.Provider>
    )

}

export default NoteState