import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './home';
import About from './about';
import Projects from './projects';
import PageNotFound from './pagenotfound';
import '../../css/content.css';

class Content extends Component {
    render() {
        return (
            <div id="content-container">
                <div id="content" className="wrapper">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/projects" component={Projects}/>
                        <Route component={PageNotFound} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Content