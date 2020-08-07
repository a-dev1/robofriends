import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: "5px solid black", height: "800px", marginTop: "40px", paddingLeft: "100px", paddingRight: "100px"}}>
            {props.children}
        </div>
    );
}

export default Scroll;