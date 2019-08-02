import React from "react";

const Button = (props) => {
    return (
        <div>
            <button class="btn btn-primary">{props.text}</button>
        </div>
    )
}

export default Button;