import React, {Component} from 'react';
import './about-card.css';

function Logo(props) {
    return (
        <div className="logo-container">
            <svg className="icon-edu">
                <symbol id="icon-edu" viewBox="0 0 42 32">
                    <title>edu</title>
                    <path
                        d="M32.639 17.561c0 0-4.592-4.682-10.92-4.682-6.183 0-12.295 4.682-12.295 4.682l-3.433-1.433v4.204c0.541 0.184 0.937 0.682 0.937 1.285 0 0.609-0.404 1.108-0.953 1.288l1.015 2.831h-2.996l1.024-2.855c-0.492-0.209-0.836-0.695-0.836-1.264 0-0.557 0.334-1.031 0.811-1.247v-4.659l-4.993-2.082 21.969-9.861 20.156 9.985-9.486 3.808zM21.469 15.251c6.366 0 9.486 3.37 9.486 3.37v6.99c0 0-3.245 2.621-9.985 2.621s-8.987-2.621-8.987-2.621v-6.99c0 0 3.12-3.37 9.486-3.37zM21.344 26.734c4.412 0 7.989-0.895 7.989-1.997s-3.577-1.997-7.989-1.997-7.988 0.895-7.988 1.997 3.576 1.997 7.988 1.997z"/>
                </symbol>
                <use xlinkHref="#icon-edu"/>
            </svg>
        </div>
    )
}

function Narrative(props) {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.year}</span>
            <span>{props.narrative}</span>
        </div>
    )
}

class AboutCard extends Component {
    render() {
        return (
            <div className="about-card-container">
                <Logo />
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