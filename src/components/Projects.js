import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Projects.css";
import placeholder from "./placeholder-images-image_large.png";

class Projects extends React.Component {

    componentDidMount() {
    }

    render() {
        return(
            <div className="container">

                <h4 className="animationTitle">Animation</h4>
                <br></br>
                <h6 className="animationDesc">
                    We at Dark Humor would punch someone in the face that talked shit about cartoons. We all remember moments in animation that have made us rise to our highest peak of joy and/or metaphysically cut us to the core. We strive to create animated pieces that are memorable and meaningful. Our projects include:
                </h6>
            <div className="row">
                <div className="col">
                <div class="card" style={{width: 18 + 'em'}}>
  <img src={placeholder} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Eye of Horus</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
<div className="col">
<div class="card" style={{width: 18 + 'em'}}>
  <img src={placeholder} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
</div>
            </div>
        )
    }
}

export default Projects;