import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header.js';
import Home from './components/Home';
import Projects from './components/Projects';
import Animation from './components/Animation';
import Games from './components/Games';
import Contacts from './components/Contacts';
import Culture from './components/Culture';
import Future from'./components/Future';
import Error404 from './components/Error404'

import './App.css';

class App extends React.Component {
  state={};

  render(){
  return (
    <Router>
    <div>
      <Header />
        <Switch>
          <Route exact path="/" component={()=> <Home />} />
          <Route exact path="/projects" component={()=> <Projects />} />
          <Route exact path="/animation" component={()=> <Animation />} />
          <Route exact path="/games" component={()=> <Games />} />
          <Route exact path="/contacts" component={()=> <Contacts />} />
          <Route exact path="/culture" component={()=> <Culture />} />
          <Route exact path="/future" component={()=> <Future />} />
          <Route component={Error404}/>
        </Switch>
    </div>
    </Router>
  );
  }
}

export default App;
