import React, { useState } from 'react'

import './About.css'
import NavigationButtons from "../components/NavigationButtons";
import Gallery, {handleArrowPress} from "../components/Gallery";
import AboutItem from "../components/AboutItem";

const About = (props) => {

    const [currentPage, setCurrentPage] = useState(0);

    const handleNewPage = (newPage) => {
        setCurrentPage(handleArrowPress(currentPage, newPage, props.pages.length))
    };

    const pages = [];
    props.pages.forEach((page, index) => {
        pages.push(<AboutItem key={index} index={index} page={page} onClick={handleNewPage}/>);
    });

    return (
        <div className="about container">
            <div className="about content">
                <Gallery pages={pages} currentPage={currentPage} />
                <br />
                <NavigationButtons pages={['Home', 'Projects']} scrollTo={props.scrollTo}/>
            </div>
        </div>
    )
};

export default About;