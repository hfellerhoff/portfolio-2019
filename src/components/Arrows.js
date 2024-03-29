import React from 'react'

import arrow from "../images/arrow.png";
import { FadeIn } from "./AnimationWrappers";


export const ContactArrow = (props) => {
    return (
        <div>
            <img src={arrow} className='contact arrow-image social' alt='Arrow'/>
            <div className='contact arrow-text-container social'>
                <p className='contact arrow-text social'>LinkedIn</p>
                <p className='contact arrow-text social'>+</p>
                <p className='contact arrow-text social'>Github</p>
            </div>
        </div>
    )
};

export const HomeArrow = (props) => {
    return (
        <FadeIn delay={3000} duration={1000}>
            <img src={arrow} className='home arrow-image' alt='Arrow'/>
            <div className='home arrow-text-container'>
                <p className='home arrow-text'>Contact</p>
                <p className='home arrow-text'>+</p>
                <p className='home arrow-text'>Resume</p>
            </div>
        </FadeIn>
    )
};

export const ResumeArrow = (props) => {
    return (
        <div style={props}>
            <img src={arrow} className='contact arrow-image resume' alt='Arrow'/>
            <p className='contact arrow-text arrow-text-container resume'>Resume!</p>
        </div>
    )
};