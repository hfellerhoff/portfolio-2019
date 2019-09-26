import React, { useState } from 'react'
import NavigationButtons from "../components/NavigationButtons";
import Gallery, { handleArrowPress } from "../components/Gallery";
import ProjectItem from "../components/ProjectItem";

const Projects = (props) => {
    const scrollTo = (page) => {
        props.scrollTo(page);
    };

    const [currentPage, setCurrentPage] = useState(0);

    const handleNewPage = (newPage) => {
        setCurrentPage(handleArrowPress(currentPage, newPage, props.projects.length))
    };

    const projects = [];
    props.projects.forEach((project, index) => {
        let image = <img className='project-item image' src={require(`../images/${project.filename.toLowerCase()}`)} alt={project.title} />
        projects.push(<ProjectItem key={index} index={index} project={project} image={image} onClick={handleNewPage}/>);
    });

    return (
        <div className="projects container">
            <div className="projects content">
                <div>
                    <Gallery pages={projects} currentPage={currentPage}/>
                </div>
                <NavigationButtons pages={['Home', 'About']} scrollTo={scrollTo}/>
            </div>
        </div>
    );
};

export default Projects;