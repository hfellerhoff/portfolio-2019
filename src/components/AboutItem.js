import React from 'react'

import GalleryArrow from "./GalleryArrow";

const AboutItem = ({ onClick, page: {title, subtitle, details, italicDetails, description, html}}) => {
    return (
        <div>
            <div className='about-item header'>
                <GalleryArrow direction='left' onClick={onClick}/>
                <h2>About.</h2>
                <GalleryArrow direction='right' onClick={onClick}/>
            </div>
            <div className='fade-in'>
                <h4>{title}</h4>
                <h5>{subtitle}</h5>
                <h6>{details}</h6>
                <h6><em>{italicDetails}</em></h6>
                <p>{description}</p>
                { html }
            </div>
        </div>
    )
};

export default AboutItem;