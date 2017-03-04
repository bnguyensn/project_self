import React, {Component} from 'react';
import '../css/content.css';

function Greeting(props) {
    return (
        <div id="greeting">
            <span className="block color-teal">Hello,</span>
            <br/>
            <br/>
            <span className="block text-justify">
                Congratulations on finding my site!
                Feel free to explore around and may you find what you need.
                <br/>
                <br/>
                Much love,
            </span>
            <br/>
            <br/>
            <a className="block text-right" href="https://twitter.com/bnguyensn" target="blank">@bnguyensn</a>
        </div>
    )
}

class Content extends Component {
    render() {
        return (
            <div id="content-container">
                <div className="wrapper" id="content">
                    <Greeting />
                </div>
            </div>
        )
    }
}

export default Content