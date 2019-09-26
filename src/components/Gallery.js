import React, {useState} from 'react'

const Gallery = ({ pages, currentPage }) => {

    const getPage = () => {
        if (pages === null || pages === undefined) {
            return null;
        }

        if (currentPage < pages.length) {
            console.log(`Page ${currentPage} returned.`);
            return pages[currentPage];
        } else {
            return null;
        }
    };

    return (
        <div>
            {getPage()}
        </div>
    );

};

export const handleArrowPress = (currentPage, newPage, numPages) => {
    let desiredNewPage = currentPage + newPage;

    if (numPages === 0) {
        return;
    }

    while (desiredNewPage >= numPages) {
        desiredNewPage -= numPages;
    }
    while (desiredNewPage < 0) {
        desiredNewPage += numPages;
    }

    return desiredNewPage;
};

export default Gallery;