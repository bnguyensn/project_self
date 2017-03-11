import React, {Component} from 'react';
import AboutCard from '../components/about/about-card';
import '../../css/about.css';

class About extends Component {
    render() {
        return (
            <div>
                <AboutCard
                    name="University of Southampton"
                    year="2010 - 2013"
                    narrative="Economics & Finance"
                />
            </div>
        )
    }
}

export default About