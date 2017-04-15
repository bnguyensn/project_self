import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import '../css/header.css';

const HeaderLink = ({to, exact, label}) => (
    <Route exact={exact} path={to} children={({match}) => (
        <span>
            <Link className={match ? 'header-a-active' : 'header-a'} to={to}>{label}</Link>
        </span>
    )} />
);

function NavBar(props) {
    return (
        <nav id="nav">
            <HeaderLink to="/projects" label="Projects" />
            <HeaderLink to="/about" label="About" />
            <HeaderLink to="/" exact={true} label="@B"/>
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