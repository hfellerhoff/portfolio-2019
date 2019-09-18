import React from 'react'

import arrow from "../images/arrow.png";
import {Spring} from "react-spring/renderprops-universal";


export const ContactArrow = (props) => {
    return (
        <div>
            <img src={arrow} className='contact arrow-image' alt='Arrow'/>
            <div className='contact arrow-text-container'>
                <p className='contact arrow-text'>LinkedIn</p>
                <p className='contact arrow-text'>+</p>
                <p className='contact arrow-text'>Github</p>
            </div>
        </div>
    )
};

export const HomeArrow = (props) => {
    return (
        <Spring from={{opacity: 0}}
                to={{opacity: 1}}
                config={{delay: 3000, duration: 1000}}>
            {props => (
                <div style={props}>
                    <img src={arrow} className='home arrow-image' alt='Arrow'/>
                    <p className='home arrow-text'>Contact Me!</p>
                </div>
            )}
        </Spring>
    )
};

export const ResumeArrow = (props) => {
    return (
        <div style={props}>
            <img src={arrow} className='contact arrow-image resume' alt='Arrow'/>
            <p className='contact arrow-text arrow-text-container resume'>Resume</p>
        </div>
    )
};