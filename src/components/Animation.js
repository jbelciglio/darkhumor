import React from "react";
import "./Animation.css";
import placeholder from "../assets/images/placeholder-images-image_large.png";
import ProjectCard from './ProjectCard';

const Animation = () => {
 return (
    <div className="container">
        <row>
        <h4 className="animationTitle">Animation</h4>
        <br></br>
        <h6 className="animationDesc">
          We at Dark Humor would punch someone in the face that talked shit about cartoons. We all remember moments in animation that have made us rise to our highest peak of joy and/or metaphysically cut us to the core. We strive to create animated pieces that are memorable and meaningful. Our projects include:
        </h6>
        </row>
        <div className="row">
          <div className="col">
            <ProjectCard
                title="Eye of Horus" 
                placeholder={placeholder} 
                text="Some quick example text to build on the card title and make up the bulk of the card's content."
                pathname=""
                buttontext="Go somewhere"
            />
          </div>
          <div className="col">
            <ProjectCard
                title="Animation"
                placeholder={placeholder}
                text="Description about animation."
                pathname=""
                buttontext="Go somewhere"
            />
          </div>
          <div className="col">
            <ProjectCard
                title="Animation"
                placeholder={placeholder}
                text="Description about animation."
                pathname=""
                buttontext="Go somewhere"
            />
          </div>
        </div>
      </div>
 );
}

export default Animation;