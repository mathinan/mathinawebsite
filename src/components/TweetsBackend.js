import React, { Component } from 'react'
import ReactEmbedGist from 'react-embed-gist'

export default class TweetsBackend extends Component {
    render() {
        return (
            <div>
                <p className="title-gist">index.js</p>
                <ReactEmbedGist
                    gist="mathinan/e24acc2e1896c58a4b4be152c29bd7d5"
                />
            </div>
        )
    }
}
