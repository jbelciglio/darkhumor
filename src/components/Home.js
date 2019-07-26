import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Home.css";
import darkHumor from './darkHumor.png'


class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return(
       
        <div className="container">
            <div className="row"> 
                <div className="col">
                    <img src={darkHumor} alt="logo" id="logo"  />
                </div>
                <div className="col">
                    Welcome to Dark Humor Studios
                    <br></br>
                    We are a group of creators that are dedicated to the art of stories. We grew up on tales of humanity that were told on every for of media that one can think of. Movies, TV shows, comic books, video games, webseries, podcasts, all of this and more! So, we decided to create a place where we can let the story decide how it wants to be told. We believe in the stories we tell, and we believe in sharing those stories with all of you. Join us.
                </div>
            </div>
        </div>
      
        )
    }
}

export default Home;