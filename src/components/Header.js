import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import axios from "axios";

const Header = () => {

  return (
    <div class="pos-f-t">
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
          <Link to="/projects" id="navLink">Projects</Link>
          <Link to="/contacts" id="navLink">Contacts</Link>
          <Link to="/culture" id="navLink">Our Culture</Link>
          <Link to="/future" id="navLink">Our Future</Link>
          <Link to="/blog" id="navLink">Blog</Link>
          <br></br>
          <Link to="/animation" id="navLink_sub">Animation</Link>
          <br></br>
          <Link to="/games" id="navLink_sub">Games</Link>
          <br></br>
          <Link to="/socialmedia" id="navLink_sub">Social Media</Link>
          <br></br>
        </div>
      </div>
      <nav class="navbar navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="logoText">
          <Link to="/" h5 class="text-white h4">Dark Humor Studios</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;