import React from 'react'
import NavigationButtons from "../components/NavigationButtons";
import Gallery from "../components/Gallery";

const Projects = (props) => {
    const scrollTo = (page) => {
        props.scrollTo(page);
    };

    let images = [];
    props.projects.forEach(project => {
        images.push(<img className='project-item image' src={require(`../images/${project.filename.toLowerCase()}`)} alt={project.title} />)
    });

    return (
        <div className="projects container">
            <div className="projects content">
                <div>
                    <Gallery projects={props.projects} images={images}/>
                </div>
                <NavigationButtons pages={['Home', 'About']} scrollTo={scrollTo}/>
            </div>
        </div>
    );
};

export default Projects;