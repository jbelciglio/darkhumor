import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Projects.css";
import placeholder from "../assets/images/placeholder-images-image_large.png";
import ProjectCard from './ProjectCard';

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
            <ProjectCard title="Eye of Horus" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
          </div>
          <div className="col">
            <ProjectCard title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;