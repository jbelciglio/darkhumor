import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import axios from "axios";
import darkHumor from '../assets/images/darkHumor.png'

class Header extends React.Component {
    componentDidMount() {
    }

    render(){
        return (
            <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="p-4" id="navInt">
    <Link to="/Projects" id="navLink">Projects</Link>
    <Link to="/Contacts" id="navLink">Contacts</Link>
    <Link to="/Culture" id="navLink">Our Culture</Link>
    <Link to="/Future" id="navLink">Our Future</Link>
    <Link to="/Blog" id="navLink">Blog</Link>
    <br></br>
    <Link to="/Animation" id="navLink_sub">Animation</Link>
    <br></br>
    <Link to ="/Games" id="navLink_sub">Games</Link>
    <br></br>
    <Link to ="/Social_Media" id="navLink_sub">Social Media</Link>
    <br></br>
    
      
    </div>
  </div>
  
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
        )
            
        
    }
}

export default Header;