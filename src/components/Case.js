import React, { Component } from 'react'

export default class Case extends Component {
    render() {
        return (
            <div className="case-style">
                <img className="case-img" src={this.props.img} alt="plasma_bubble_img"></img>
                <p className="case-label">{this.props.label}</p>
            </div>
        )
    }
}
