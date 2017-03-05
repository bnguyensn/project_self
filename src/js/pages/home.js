import React, {Component} from 'react';
import '../../css/home.css';

function Greeting(props) {
    return (
        <div id="greeting">
            <span className="block color-teal">Hello,</span>
            <br/>
            <br/>
            <span className="block text-justify">
                Congratulations for finding my site!
                Feel free to explore around and may you find what you need.
                <br/>
                <br/>
                Much love,
            </span>
            <br/>
            <br/>
            <span className="block text-right">
                <a href="https://twitter.com/bnguyensn" target="blank">@bnguyensn</a>
            </span>
        </div>
    )
}

class Home extends Component {
    render() {
        return (
            <div>
                <Greeting />
            </div>
        )
    }
}

export default Home