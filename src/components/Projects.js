import React from "react";
import "./Projects.css";
import ProjectCard from './ProjectCard';
import placeholder from "../assets/images/placeholder-images-image_large.png";
import { underline } from "ansi-colors";

const Projects = () => {

  return (
    <div className="container">
      <row>
        <h4 className="projectsTitle">Projects</h4>
        <br></br>
        <h6 className="projectsDesc">
          At the core of anything with the <u>Dark Humor</u> brand on it is the <i>story</i>. We are a collection of storytellers, and we only do what we do to give life to our stories in whatever form they call for. Here, you can delve into the various forms of storytelling we are utilizing, and best believe we intend on expanding that list in the near future.
        </h6>
      </row>
      <div className="row">
        <div className="col">
          <ProjectCard
            title="Animation"
            placeholder={placeholder}
            text="Anyone who tells you that animated shows are for kids can suck it."
            pathname="/animation"
            buttontext="Check out our Cartoons"
          />
        </div>
        <div className="col">
          <ProjectCard
            title="Games"
            placeholder={placeholder}
            text="Sometimes, you'd rather be the ass-kicker instead of watching said ass-kicker."
            pathname="/games"
            buttontext="Check out our Games"
          />
        </div>
        <div className="col">
          <ProjectCard
            title="Social Media"
            placeholder={placeholder}
            text="Social media is destroying our society. Come take a look at how we're making it worse."
            pathname="/social_media"
            buttontext="Check our Socials"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;