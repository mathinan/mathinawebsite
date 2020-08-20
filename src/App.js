import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Tweets from './components/Tweets';
import Project from './components/Project';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Router>
        <Header></Header>
        <Route exact path="/" component={Tweets}></Route>
        <Route path="/project" component={Project} />
      </Router>
    )
  }
}

export default App;
