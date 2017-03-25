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

    componentDidMount() {

        // ===== REPOSITIONING ===== //
        // An array of narrative containers
        const allNarratives = document.getElementsByClassName('all-narrative-container');

        // Adjust the position of each narrative container based on how many narratives it has
        for(let i = 0; i < allNarratives.length; i++) {
            const narrativeCount = allNarratives[i].childElementCount;
            const translatedX = `${-(100 - 1/narrativeCount * 50)}%`;
            allNarratives[i].style.transform = `translate(${translatedX}, 0)`
        }
    }

    handleDragStart(e) {
        e.preventDefault();
    }

    render() {
        const narrativeObjs = Object.keys(this.props.narrative);
        const narrativeItems = narrativeObjs.map((narrativeItem) => (
            <div key={narrativeItem} className="narrative-container" draggable="true"
                 onDragStart={this.handleDragStart}>
                <span key={`${narrativeItem}-${this.props.narrative[narrativeItem].name}`}>
                    {this.props.narrative[narrativeItem].name}
                </span>
                <span key={`${narrativeItem}-${this.props.narrative[narrativeItem].year}`}>
                    {this.props.narrative[narrativeItem].year}
                </span>
                <span key={`${narrativeItem}-${this.props.narrative[narrativeItem].narrative}`}>
                    {this.props.narrative[narrativeItem].narrative}
                </span>
            </div>
        ));
        return (
            <div className="narrative-viewbox">
                <div className="all-narrative-container">
                    {narrativeItems}
                </div>
            </div>
        )
    }
}

class AboutCard extends Component {
    render() {
        return (
            <div className="about-card-container">
                <Logo logo={this.props.logo}/>
                <Narrative narrative={this.props.narrative}/>
            </div>
        )
    }
}

export default AboutCard