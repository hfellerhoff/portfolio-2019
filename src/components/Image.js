import React from 'react';

const Image = (url, className, alt) => {
    console.log(url, className, alt);
    const image = () => require(url);
    return <img src={image} className={className} alt={alt} />
};

export default Image;