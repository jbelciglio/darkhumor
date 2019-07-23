import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Home.css";


class Home extends React.Component {
    componentDidMount() {
    }

    render() {
        return(
       
            <div className="container">
                
                <img src="darkHumor.png" alt="logo"></img>
              
            </div>
      
        )
    }
}

export default Home;