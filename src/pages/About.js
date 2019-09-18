import React from 'react'

import './About.css'
import NavigationButtons from "../components/NavigationButtons";

const About = (props) => {
    return (
        <div className="about container">
            <div className="about content">
                <h2>About.</h2>
                <h4>Education</h4>
                <h5>Loyola University Chicago</h5>
                <h6>Computer Science (BS) + Vocal Performance (BA)</h6>
                <h6><em>Projected Graduation 2022</em></h6>
                <br />
                <NavigationButtons pages={['Home', 'Projects']} scrollTo={props.scrollTo}/>
            </div>
        </div>
    )
};

export default About;