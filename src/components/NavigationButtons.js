import React from 'react'

import './NavigationButtons.css'

function NavigationButtons(props) {
    const pageNumbers = [];
    props.pages.forEach(page => {
        page = page.toLowerCase();
        let pageNumber;
        if (page === 'home') {
            pageNumber = 0;
        } else if (page === 'about') {
            pageNumber = 1;
        } else if (page === 'projects') {
            pageNumber = 2;
        } else if (page === 'contact') {
            pageNumber = 3;
        } else {
            pageNumber = 0;
        }
        pageNumbers.push(pageNumber);
    });

    const buttons = [];
    pageNumbers.forEach((pageNumber, index) => {
        buttons.push(<button onClick={() => props.scrollTo(pageNumber)}><span>{props.pages[index]}</span></button>)
    });

    return (
        <div className="navigation-buttons">
            {buttons}
        </div>
    )
}

export default NavigationButtons;