import React, {Component} from 'react';
import '../css/header.css';

function NavBar(props) {
    return (
        <nav id="nav">
            <span><a href="/projects">Projects</a></span>
            <span><a href="/about">About</a></span>
        </nav>
    )
}

class Header extends Component {
    render() {
        return (
            <div id="header-container">
                <div className="wrapper" id="header">
                    <NavBar />
                </div>
            </div>
        )
    }
}

export default Header