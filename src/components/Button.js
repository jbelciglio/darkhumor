import React from "react";
import placeholder from "../assets/images/placeholder-images-image_large.png";

const Button = (props) => {
    return (
        <div>
            <a href={props.href} class="btn btn-primary">{props.text}</a>
        </div>
    )
}

export default Button;