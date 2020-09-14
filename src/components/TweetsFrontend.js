import React, { Component } from 'react'
import ReactEmbedGist from 'react-embed-gist'

export default class TweetsFrontend extends Component {
    render() {
        return (
            <div>
                <p className="gist-title">TweetObject.vue</p>
                <ReactEmbedGist
                    gist="mathinan/f664427ee45c9bdb3519b08825d3ca60"
                />
            </div>
        )
    }
}
