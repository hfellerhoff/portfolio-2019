import React from 'react'
import {Spring} from "react-spring/renderprops-universal";

import './About.css'

function About() {
    return (
        <div className="about container">
            <AboutStatic />
        </div>
    )
}

function AboutStatic() {
    return (
        <div className="about content">
            <h1>About</h1>
        </div>
    )
}

export default About;