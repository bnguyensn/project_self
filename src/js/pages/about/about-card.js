import React, {Component} from 'react';
import './about-card.css';

function Logo(props) {
    return (
        <div className="logo-container">
            <svg>
                <symbol id={props.logo.title} viewBox={props.logo.viewBox}>
                    <title>{props.logo.title}</title>
                    <path d={props.logo.path}/>
                </symbol>
                <use xlinkHref={`#${props.logo.title}`}/>
            </svg>
        </div>
    )
}


class Narrative extends React.Component {
    constructor(props) {
        super(props);

        // Make 'this' works in the callback
        this.handleDragStart = this.handleDragStart.bind(this);
    }

    handleDragStart(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div className="narrative-container" draggable="true" onDragStart={this.handleDragStart}>
                <span>{this.props.name}</span>
                <span>{this.props.year}</span>
                <span>{this.props.narrative}</span>
            </div>
        )
    }
}

class AboutCard extends Component {
    render() {
        return (
            <div className="about-card-container">
                <Logo logo={this.props.logo}/>
                <Narrative
                    name={this.props.name}
                    year={this.props.year}
                    narrative={this.props.narrative}
                />
            </div>
        )
    }
}

export default AboutCard