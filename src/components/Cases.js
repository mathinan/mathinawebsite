import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Case from './Case'

export default class Cases extends Component {
    render() {
        return (
            this.props.cases.map(item => (
                <Col xs={12} sm={this.props.smValue} md={this.props.mdValue} lg={this.props.lgValue}>
                    <Case key={item.id} label={item.label} img={item.img}></Case>
                </Col>
            ))
        )
    }
}
