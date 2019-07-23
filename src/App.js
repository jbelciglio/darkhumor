import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header.js';
import Home from './components/Home';
import Projects from './components/Projects';
import Contacts from './components/Contacts';


import './App.css';

class App extends React.Component {
  state={};

  render(){
  return (
    <Router>
    <div className="Container">
    <Header />
    <Route exact path="/" component={()=> <Home />} />
    <Route exact path="/projects" component={()=> <Projects />} />
    <Route exact path="/contacts" component={()=> <Contacts />} />
    </div>
    </Router>
  );
  }
}

export default App;
