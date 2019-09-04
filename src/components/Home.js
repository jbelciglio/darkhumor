import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Home.css";
import darkHumor from '../assets/images/darkHumor.png'
import { useSpring, animated } from "react-spring";
import { Spring } from "react-spring/renderprops";


const Home = () => {
    
    return (
        <div className="container">
            <div className="row">
                <Spring
                from={{ opacity: 0, marginTop: -500}}
                to={{opacity: 1, marginTop: 0}}>
                    {props => (
                        <div style={props} className="col">
                        <img src={darkHumor} alt="logo" id="logo" />
                    </div>
                    )}
                </Spring>
                
                <div className="col">
                    <h3> Welcome to Dark Humor Studios</h3>
                    We are a group of artists, developers, and creators that are obsessed with storytelling. We grew up on tales of humanity that were told on every form of media that one can think of. Movies, TV shows, comic books, video games, webseries, podcasts, all of this and more! Whether it be through a game or a show or even through social media, we are here to serve the story and tell it the way it needs to be told. May you find in our work inspiration and few laughs followed by "Jesus Christ!"
                </div>
            </div>
        </div>
        
    );
    
}


export default Home;