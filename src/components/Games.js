import React from "react";
import "./Games.css";
import placeholder from "../assets/images/placeholder-images-image_large.png";
import ProjectCard from './ProjectCard';

const Games = () => {

  return (
    <div className="container">
      <row>
        <h4 className="gamesTitle">Games</h4>
        <br></br>
        <h6 className="gamesDesc">
          Text talking about Dark Humor games.
        </h6>
      </row>
      <div className="row">
        <div className="col">
          <ProjectCard
            title="Game 1"
            placeholder={placeholder}
            text="Some quick example text to build on the card title and make up the bulk of the card's content."
            pathname=""
            buttontext="Go somewhere"
          />
        </div>
        <div className="col">
          <ProjectCard
            title="Game 2"
            placeholder={placeholder}
            text="Description about game."
            pathname=""
            buttontext="Go somewhere"
          />
        </div>
        <div className="col">
          <ProjectCard
            title="Game 3"
            placeholder={placeholder}
            text="Description about game."
            pathname=""
            buttontext="Go somewhere"
          />
        </div>
      </div>
    </div>
  );
}

export default Games;