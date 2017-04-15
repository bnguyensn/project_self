import React, {Component} from 'react';
import './about.css';
import aboutObj from './about.json';

/* The below section loops through all objects in our JSON file
   and groups them into their appropriate "type" categories
   ("love", "done", and "want").

   It's either you do this or separate the objects out in the
   JSON file itself.
 */
const aboutObjKeys = Object.keys(aboutObj), aboutObjLen = aboutObjKeys.length;
let loveObjKeys = [], doneObjKeys = [], wantObjKeys = [];
for (let i = 0; i < aboutObjLen; i++) {
    if (aboutObj[aboutObjKeys[i]].type === 'love') {
        loveObjKeys.push(aboutObjKeys[i]);
    } else if (aboutObj[aboutObjKeys[i]].type === 'done') {
        doneObjKeys.push(aboutObjKeys[i]);
    } else {
        wantObjKeys.push(aboutObjKeys[i]);
    }
}

class InfoCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
        };

        this.toggleInfoCard = this.toggleInfoCard.bind(this);
    }

    componentDidMount() {
        this.descriptionDiv.style.height = 0;
    }

    toggleInfoCard(e) {
        e.stopPropagation();
        this.setState(prevState => ({
            expanded: !prevState.expanded,
        }));
    }

    componentDidUpdate() {
        if (this.state.expanded) {
            this.descriptionDiv.style.height = 'auto';
            TweenLite.from(this.descriptionDiv, .25, {height: 0, ease: Power2.easeOut});
        } else {
            TweenLite.to(this.descriptionDiv, .25, {height: 0, ease: Power2.easeOut});
        }
    }

    render() {
        return (
            <div className={`ic-container ic-${this.props.data.type}`} onClick={this.toggleInfoCard}>
                <div className="ic-icon">
                    <img src={require(`./icons/${this.props.data.iconFile}`)}/>
                </div>
                <div className="ic-textBoxes">
                    <div className="ic-title">
                        {this.props.data.title}
                    </div>
                    <div className="ic-description" ref={(descriptionDiv) => { this.descriptionDiv = descriptionDiv; }}>
                        {this.props.data.description}
                    </div>
                </div>
            </div>
        )
    }
}

class InfoCardGroup extends Component {
    constructor(props) {
        super(props);

        this.infoCardGroup = this.props.keys.map((k) =>
            <InfoCard key={k} data={this.props.data[k]}/>
        );
    }

    componentDidMount() {
        // TODO: animate entrance
    }

    render() {
        return (
            <div className="ic-group">
                <span>{this.props.groupTitle}</span>
                {this.infoCardGroup}
            </div>
        );
    }
}

class About extends Component {
    render() {
        return (
            <div className="wrapper" id="about-content">
                <InfoCardGroup data={aboutObj} keys={loveObjKeys} groupTitle="Things I Love"/>
                <InfoCardGroup data={aboutObj} keys={doneObjKeys} groupTitle="Things I've Done"/>
                <InfoCardGroup data={aboutObj} keys={wantObjKeys} groupTitle="Things I Want"/>
            </div>
        )
    }
}

export default About