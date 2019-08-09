import React from "react";
import "./Error404.css";

const Error404 = (props) => {
    
    return (
        <div>
            <p style={{"text-align": "center"}}>Page not found for {props.location.pathname}.</p>
        </div>
    );
}

export default Error404;