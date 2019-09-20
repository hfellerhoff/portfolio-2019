import React from 'react'
import NavigationButtons from "../components/NavigationButtons";
import Gallery from "../components/Gallery";

const Projects = (props) => {
    const scrollTo = (page) => {
        props.scrollTo(page);
    };

    return (
        <div className="projects container">
            <div className="projects content">
                <div>
                    <Gallery projects={props.projects}/>
                </div>
                <NavigationButtons pages={['Home', 'About']} scrollTo={scrollTo}/>
            </div>
        </div>
    );
};

export default Projects;