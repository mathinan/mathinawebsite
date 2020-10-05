import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Project from './components/Project';
import PreProject from './components/PreProject';
import Internship from './components/Internship';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header></Header>
        <Route exact path="/" component={Project}></Route>
        <Route path="/pre-project" component={PreProject}></Route>
        <Route path="/internship" component={Internship}></Route>
      </Router>
    )
  }
}

export default App;
