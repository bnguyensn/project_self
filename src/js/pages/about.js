import React, {Component} from 'react';
import AboutCard from './about/about-card';
import '../../css/about.css';

// SVG symbol parameters

const symbolEdu = {
    "title": "edu",
    "path": "M32.639 17.561c0 0-4.592-4.682-10.92-4.682-6.183 0-12.295 4.682-12.295 4.682l-3.433-1.433v4.204c0.541 0.184 0.937 0.682 0.937 1.285 0 0.609-0.404 1.108-0.953 1.288l1.015 2.831h-2.996l1.024-2.855c-0.492-0.209-0.836-0.695-0.836-1.264 0-0.557 0.334-1.031 0.811-1.247v-4.659l-4.993-2.082 21.969-9.861 20.156 9.985-9.486 3.808zM21.469 15.251c6.366 0 9.486 3.37 9.486 3.37v6.99c0 0-3.245 2.621-9.985 2.621s-8.987-2.621-8.987-2.621v-6.99c0 0 3.12-3.37 9.486-3.37zM21.344 26.734c4.412 0 7.989-0.895 7.989-1.997s-3.577-1.997-7.989-1.997-7.988 0.895-7.988 1.997 3.576 1.997 7.988 1.997z",
    "viewBox": "0 0 42 32"
};

const symbolWork = {
    "title": "work",
    "path": "M10 4h8v-2h-8v2zM28 14v7.5c0 1.375-1.125 2.5-2.5 2.5h-23c-1.375 0-2.5-1.125-2.5-2.5v-7.5h10.5v2.5c0 0.547 0.453 1 1 1h5c0.547 0 1-0.453 1-1v-2.5h10.5zM16 14v2h-4v-2h4zM28 6.5v6h-28v-6c0-1.375 1.125-2.5 2.5-2.5h5.5v-2.5c0-0.828 0.672-1.5 1.5-1.5h9c0.828 0 1.5 0.672 1.5 1.5v2.5h5.5c1.375 0 2.5 1.125 2.5 2.5z",
    "viewBox": "0 0 28 28"
};

class About extends Component {
    render() {
        return (
            <div>
                <AboutCard
                    bkgColor="#4FC3F7" /* Light Blue 300 */
                    logo={symbolEdu}
                    name="University of Southampton"
                    year="2010 - 2013"
                    narrative="Economics & Finance"
                />
                <AboutCard
                    bkgColor="#7986CB" /* Indigo 300 */
                    logo={symbolWork}
                    name="PwC UK"
                    year="2014 - Current"
                    narrative="Assurance - Insurance & Investment Management"
                />
            </div>
        )
    }
}

export default About