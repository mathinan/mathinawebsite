import React, { Component } from 'react'
import {Container, Row} from 'react-bootstrap'
import Cases from './Cases'
import Bubble1 from '../img/preproject/bubble1.png'
import Bubble2 from '../img/preproject/bubble2.png'
import Bubble3 from '../img/preproject/bubble3.png'
import Bubble4 from '../img/preproject/bubble4.png'
import Bubble5 from '../img/preproject/bubble5.png'
import Bubble6 from '../img/preproject/bubble6.png'

export default class PreProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cases: [
                {
                    id: 1,
                    label: '1. Raw image of plasma bubble',
                    img: Bubble1
                },
                {
                    id: 2,
                    label: '2. Add contrast',
                    img: Bubble2
                },
                {
                    id: 3,
                    label: '3. Image averaging',
                    img: Bubble3
                },
                {
                    id: 4,
                    label: '4. Adaptive thresholding',
                    img: Bubble4
                },
                {
                    id: 5,
                    label: '5. Morphological transformations',
                    img: Bubble5
                },
                {
                    id: 6,
                    label: '6. Image masking',
                    img: Bubble6
                }
            ],
            smValue: 6,
            mdValue: 4,
            lgValue: 4
        }
    }

    render() {
        return (
            <Container>
                <h1 className="title">Detection of Ionospheric Plasma Bubble Phenomenon</h1>
                <p className="description">Classify Plasma Bubble Phenomenon using Image Processing</p>
                <Row>
                    <Cases cases={this.state.cases} smValue={this.state.smValue} mdValue={this.state.mdValue} lgValue={this.state.lgValue}></Cases>
                </Row>
            </Container>
        )
    }
}
