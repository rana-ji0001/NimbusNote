import React from 'react'

function Alert(props) {
    // const capital = (word) => {
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    return (
        <div className={`alert alert-primary alert-dismissible fade show`} style={{
            bottom: "20px",
            position: 'fixed',
            left: "20px",
            zIndex: 9999,
            padding: "10px 20px",
            minWidth: "200px"
            //   {capital(props.alert.type)}
        }} role="alert">
            {props.msg}
        </div>
    )

}

export default Alert
