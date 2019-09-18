import React from 'react'
import ProjectItem from "../components/ProjectItem";

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
                <div className="home navigation-buttons">
                    <button onClick={() => scrollTo(0)}><span>Home</span></button>
                    <button onClick={() => scrollTo(1)}><span>About</span></button>
                </div>
            </div>
        </div>
    );
};

export default Projects;