import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header.js';
import Home from './components/Home';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import Culture from './components/Culture';
import Future from'./components/Future';

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
    <Route exact path="/culture" component={()=> <Culture />} />
    <Route exact path="/future" component={()=> <Future />} />
    </div>
    </Router>
  );
  }
}

export default App;
