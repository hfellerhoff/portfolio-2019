import React from 'react'
import ProjectItem from "../components/ProjectItem";
import NavigationButtons from "../components/NavigationButtons";

const Projects = (props) => {
    const scrollTo = (page) => {
        props.scrollTo(page);
    };

    return (
        <div className="projects container">
            <div className="projects content">
                <h2 className='projects title'>Projects.</h2>
                <div>
                    {
                        props.projects.map((project, index) => (
                            <ProjectItem key={index} index={index} project={project}/>
                        ))
                    }
                </div>
                <NavigationButtons pages={['Home', 'About']} scrollTo={scrollTo}/>
            </div>
        </div>
    );
};

export default Projects;