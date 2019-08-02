import React from "react";
import "./SocialMedia.css";
import placeholder from "../assets/images/placeholder-images-image_large.png";
import ProjectCard from './ProjectCard';

const socialMedia = () => {
 return (
    <div className="container">
        <row>
        <h4 className="socialTitle">Social Media</h4>
        <br></br>
        <h6 className="socialDesc">
            Here is our social media!
        </h6>
        </row>
        <div className="row">
        <div className="col">
            <ProjectCard
              title="Social"
              placeholder={placeholder} 
              text="Aliqua duis commodo velit dolor nulla Lorem culpa consequat voluptate irure veniam exercitation officia excepteur."
              pathname=""
              buttontext="Go somewhere"
            />
          </div>
          <div className="col">
            <ProjectCard
              title="Media"
              placeholder={placeholder} 
              text="Amet magna cupidatat minim elit eiusmod laboris esse cupidatat eiusmod labore sint."
              pathname=""
              buttontext="Go somewhere"
            />
          </div>
          <div className="col">
            <ProjectCard
              title="Here"
              placeholder={placeholder} 
              text="Amet magna cupidatat minim elit eiusmod laboris esse cupidatat eiusmod labore sint."
              pathname=""
              buttontext="Go somewhere"
            />
          </div>
        </div>
      </div>
 );
}

export default socialMedia;