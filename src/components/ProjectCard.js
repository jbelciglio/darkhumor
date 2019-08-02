import React from "react";
import Button from "./Button";
import {Link} from "react-router-dom";

const projectCard = (props) => {
    return (
        <div class="card" style={{width: 18 + 'em'}}>
            <img src={props.placeholder} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <Link to={props.pathname}>
                    <Button text={props.buttontext}/>
                </Link>
            </div>
        </div>
    )
}

export default projectCard;