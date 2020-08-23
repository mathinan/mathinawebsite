import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import LogitruckVDO from '../media/Logitruck-VDO.mp4'

export default class Project extends Component {
    render() {
        return (
            <Container>
                <h1 className="title">Intelligent Truck Tracking System</h1>
                <p className="description">GUI on Raspberry Pi Touchscreen</p>
                <video width="100%" height="auto" controls muted preload="auto">
                    <source src={LogitruckVDO} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </Container>
        )
    }
}
