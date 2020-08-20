import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Github from '../img/icon_github.png'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Container>
                    <Row>
                        <Col xs={{span: 12, order: 1}} md={{order: 1}}>
                            <Link to="/" className="name">Mathina N</Link>
                        </Col>
                        <Col xs={{span: 12, order: 3}} md={{order: 2}}>
                            <Link to="/" className="nav">Tweets</Link>
                        </Col>
                        <Col xs={{span: 12, order: 4}} md={{order: 3}}>
                            <Link to="/project" className="nav">Project</Link>
                        </Col>
                        <Col xs={{span: 12, order: 2}} md={{order: 4}}>
                            <a href="https://www.github.com/mathinan" rel="noopener noreferrer" target="_blank">
                                <img src={Github} alt="icon_github" width="24" height="24" />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}