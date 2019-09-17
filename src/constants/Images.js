import React from 'react';

export const JoinMe = () => {
    const image = require('../images/joinme.png');
    return <img src={image} className="project-item image" alt="Project Image" />
};

export const Arrow = () => {
    const image = require('../images/arrow.png');
    return <img src={image} className='arrow-image' />
};