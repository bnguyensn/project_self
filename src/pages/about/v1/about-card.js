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

class NavBtn extends React.Component {
    constructor(props) {
        super(props);

        // Make 'this' works in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.moveNBar(this.props.positionRight);
    }

    render() {
        let positionStyle = {};
        let navIcon = <i className="material-icons">&#xE5CB;</i>;
        if (this.props.positionRight) {
            positionStyle = {
                left: '100%',
                transform: 'translate(-100%, 0)'
            };
            navIcon = <i className="material-icons">&#xE5CC;</i>
        }
        return (
            <div className="narrative-viewbox-navbtn" style={positionStyle} onClick={this.handleClick}>
                {navIcon}
            </div>
        )
    }
}

class NarrativeBar extends React.Component {
    constructor(props) {
        super(props);

        // Make 'this' works in the callback
        this.handleDragStart = this.handleDragStart.bind(this);
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
        return(
            <div className="all-narrative-container">
                {narrativeItems}
            </div>
        )
    }
}

class NarrativeViewBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            nBPos: 0,
            nBPosMax: 0,
            nBMoveDist: 0
        };

        // Make 'this' works in the callback
        this.moveNarrativeBar = this.moveNarrativeBar.bind(this);
    }

    componentDidMount() {

        // ===== INITIAL POSITIONING ===== //
        const narrativeBar = document.querySelector(`div#${this.props.id} div.all-narrative-container`);
        const narrativeCount = narrativeBar.childElementCount;
        this.setState({
            nBPos: (narrativeCount * 2) - 1,
            nBPosMax: (narrativeCount * 2) - 1,
            nBMoveDist: (100 / narrativeCount) / 2
        });

    }

    componentDidUpdate() {

        // Runs after a render / re-render / setState
        const narrativeBar = document.querySelector(`div#${this.props.id} div.all-narrative-container`);
        narrativeBar.style.transform = `translate(-${this.state.nBMoveDist * this.state.nBPos}%, 0)`;
    }

    moveNarrativeBar(moveRight) {
        let movement;
        moveRight ?
            movement = Math.min(this.state.nBPos + 2, this.state.nBPosMax) :
            movement = Math.max(this.state.nBPos - 2, 1);
        this.setState({nBPos: movement});
    }

    render() {
        return (
            <div className="narrative-viewbox">
                <NavBtn moveNBar={this.moveNarrativeBar}/>
                <NarrativeBar narrative={this.props.narrative}/>
                <NavBtn positionRight={true} moveNBar={this.moveNarrativeBar}/>
            </div>
        )
    }
}

class AboutCard extends Component {
    render() {
        return (
            <div className="about-card-container" id={this.props.id}>
                <Logo logo={this.props.logo}/>
                <NarrativeViewBox id={this.props.id} narrative={this.props.narrative}/>
            </div>
        )
    }
}

export default AboutCard