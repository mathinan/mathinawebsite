import React, { Component } from 'react'
import {Container, Row} from 'react-bootstrap'
import Cases from './Cases'
import Chat1 from '../img/internship/chat1.png'
import Chat2 from '../img/internship/chat2.png'
import Chat3 from '../img/internship/chat3.png'

export default class Internship extends Component {
    constructor() {
        super();
        this.state = {
            cases: [
                {
                    id: 1,
                    label: '1. Find nearby devices',
                    img: Chat1
                },
                {
                    id: 2,
                    label: '2. Pair and connect to a device',
                    img: Chat2
                },
                {
                    id: 3,
                    label: '3. Send and receive text messages',
                    img: Chat3
                }
            ],
            smValue: 12,
            mdValue: 12,
            lgValue: 4
        }
    }

    render() {
        return (
            <Container>
                <h1 className="title">Bluetooth Low Energy (BLE) in Smart Cities</h1>
                <p className="description">Bluetooth Chat Application for Information Sharing in Smart Cities</p>
                <Row>
                    <Cases cases={this.state.cases} smValue={this.state.smValue} mdValue={this.state.mdValue} lgValue={this.state.lgValue}></Cases>
                </Row>
            </Container>
        )
    }
}
