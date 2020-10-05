import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Github from '../img/icon_github.png'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Container>
                    <Row>
                        <Col xs={{span: 12, order: 1}} md={{order: 1}}>
                            <NavLink to="/" className="name">Mathina</NavLink>
                        </Col>
                        <Col xs={{span: 12, order: 3}} md={{order: 2}}>
                            <NavLink to="/" className="nav-link">Project</NavLink>
                        </Col>
                        <Col xs={{span: 12, order: 4}} md={{order: 3}}>
                            <NavLink to="/pre-project" className="nav-link" activeClassName="nav-selected">Pre-Project</NavLink>
                        </Col>
                        <Col xs={{span: 12, order: 5}} md={{order: 4}}>
                            <NavLink to="/internship" className="nav-link" activeClassName="nav-selected">Internship</NavLink>
                        </Col>
                        <Col xs={{span: 12, order: 2}} md={{order: 5}}>
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