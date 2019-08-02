import React from "react";
import placeholder from "../assets/images/placeholder-images-image_large.png";

const projectCard = (props) => {
    return (
        <div class="card" style={{width: 18 + 'em'}}>
            <img src={placeholder} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default projectCard;