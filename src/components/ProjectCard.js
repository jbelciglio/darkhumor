import React from "react";
import "./ProjectCard.css";
import Button from "./Button";
import { Link } from "react-router-dom";

const projectCard = (props) => {

    return (
    
        <div class="card shadow p-3 mb-5 bg-white rounded" style={{ width: 18 + 'em' }}>
            <img src={props.placeholder} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <Link to={props.pathname}>
                    <Button text={props.buttontext} />
                </Link>
            </div>
        </div>
    );
}

export default projectCard;