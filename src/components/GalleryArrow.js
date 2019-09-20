import React from 'react'
import arrow from '../images/gallery-arrow.png'

import './GalleryArrow.css'

const GalleryArrow = ({direction, onClick}) => {

    const arrowDirection = direction === 'left'
        ? {transform: 'rotate(90deg)'}
        : {transform: 'rotate(-90deg)'};
    const circleAlign = direction === 'left' ? {justifyContent: 'flex-start'} : {justifyContent: 'flex-end'};

    const handlePress = () => {
        const page = direction === 'left' ? -1 : 1;
        onClick(page);
    };

    return (
        <div className='gallery-arrow' style={circleAlign} onClick={handlePress}>
            <img src={arrow} alt="Arrow" style={arrowDirection} className='gallery-arrow-image'/>
        </div>
    )

};

export default GalleryArrow;