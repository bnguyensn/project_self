import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import Projects from './projects/projects';
import PageNotFound from './404';
import '../css/content.css';

class Content extends Component {
    render() {
        return (
            <div id="content-container">
                <div id="content">
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