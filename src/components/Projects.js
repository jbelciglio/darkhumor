import React from "react";
import "./Projects.css";
import ProjectCard from './ProjectCard';
import placeholder from "../assets/images/placeholder-images-image_large.png";

const Projects = () => {

    return(
      <div className="container">
        <row>
        <h4 className="projectsTitle">Projects</h4>
        <br></br>
        <h6 className="projectsDesc">
          Some text about Dark Humor Projects!
        </h6>
        </row>
        <div className="row">
          <div className="col">
            <ProjectCard
              title="Animation"
              placeholder={placeholder} 
              text="Aliqua duis commodo velit dolor nulla Lorem culpa consequat voluptate irure veniam exercitation officia excepteur."
              pathname="/animation"
              buttontext="Go somewhere"
            />
          </div>
          <div className="col">
            <ProjectCard
              title="Games"
              placeholder={placeholder} 
              text="Amet magna cupidatat minim elit eiusmod laboris esse cupidatat eiusmod labore sint."
              pathname="/games"
              buttontext="Go somewhere"
            />
          </div>
          <div className="col">
            <ProjectCard
              title="Social Media"
              placeholder={placeholder} 
              text="Amet magna cupidatat minim elit eiusmod laboris esse cupidatat eiusmod labore sint."
              pathname="/socialmedia"
              buttontext="Go somewhere"
            />
          </div>
        </div>
      </div>
    )
  }

export default Projects;