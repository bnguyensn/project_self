import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import '../../css/header.css';

function NavBar(props) {
    return (
        <nav id="nav">
            <span><Link to="/projects">Projects</Link></span>
            <span><Link to="/about">About</Link></span>
            <span><Link to="/">@B</Link></span>
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