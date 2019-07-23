import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import axios from "axios";

class Header extends React.Component {
    componentDidMount() {
    }

    render(){
        return (
            <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
    <Link to="/" id="nav-link">Home</Link>
    <br></br>
    <Link to="/Projects" id="nav-link">Projects</Link>
    <br></br>
    <Link to="/Contacts" id="nav-link">Contacts</Link>
      
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div id="logoText">
    
    <h5 class="text-white h4">Dark Humor Studios</h5>
    </div>
  </nav>
</div>
        )
            
        
    }
}

export default Header;