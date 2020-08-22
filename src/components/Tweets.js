import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import TweetsDemo from './TweetsDemo'
import TweetsFrontend from './TweetsFrontend'
import TweetsBackend from './TweetsBackend'

export default class Tweets extends Component {
    render() {
        return (
            <Router>
                <Container>
                    <h1 className="title">Get Tweets with Specific Hashtags</h1>
                    <ul>
                        <li>
                            <Link to="/">Demo</Link>
                        </li>
                        <li>
                            <Link to="/tweetsfrontend">Front-end: Vue.js</Link>
                        </li>
                        <li>
                            <Link to="/tweetsbackend">Back-end: Node.js</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={TweetsDemo}></Route>
                    <Route path="/tweetsfrontend" component={TweetsFrontend}></Route>
                    <Route path="/tweetsbackend" component={TweetsBackend}></Route>
                </Container>
            </Router>
        )
    }
}