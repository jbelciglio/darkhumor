import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";
import darkHumor from '../assets/images/darkHumor.png'
import { Spring } from "react-spring/renderprops";

const Header = () => {

  return (
    <div class="pos-f-t shadow p-0 mb-3 bg-none rounded">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="p-4" id="navInt">
          <Link to="/projects" id="navLink">Our Work</Link>
          <Link to="/contacts" id="navLink">Our People</Link>
          <Link to="/culture" id="navLink">Our Culture</Link>
          <Link to="/future" id="navLink">Our Future</Link>
          <Link to="/blog" id="navLink">Our Blog</Link>
          <br></br>
          <Link to="/animation" id="navLink_sub">Animation</Link>
          <br></br>
          <Link to="/games" id="navLink_sub">Games</Link>
          <br></br>
          <Link to="/social_media" id="navLink_sub">Social Media</Link>
          <br></br>
        </div>
      </div>
      <Spring
                from={{ marginTop: -500}}
                to={{ marginTop: 0}}>
                  {props => (
                    <div style={props}>
<nav class="navbar navbar-light" id="navMain">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div  id="logoText">
          <img src={darkHumor} width="35" height="35" alt="logo" id="logoNav" />
          <Link to="/" h5 class="text h4" id="navTitle">Dark Humor Studios</Link>
        </div>
      </nav>
                    </div>
                  )}
                </Spring>
      
    </div>
  );
}

export default Header;