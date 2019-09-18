import React from 'react'

import '../pages/Projects.css'

function ProjectItem({ project: {filename, title, subtitle, description, technologies, tools} }) {
    return (
        <div className="project-item container">
            <div className='project-item header'>
                <h2>Projects.</h2>
            </div>
            <div className='project-item image-container'>
                <img className='project-item image' src={require(`../images/${filename.toLowerCase()}`)} alt={title} />
            </div>
            <div className="project-item title">
                <h5>{title}</h5>
                <h6 >{subtitle}</h6>
            </div>
            {/*<div className="project-item subtitle">*/}
            {/*    */}
            {/*</div>*/}
            <div className="project-item description">
                <p>{description}</p>
            </div>
            <div className="project-item list-header technologies">
                <h6>Technologies</h6>
                <ul>{ getListItems(technologies) }</ul>
            </div>
            <div className="project-item list-header tools">
                <h6>Tools</h6>
                <ul>{ getListItems(tools) }</ul>
            </div>
        </div>
    )
}

function getListItems(items) {
    let listItems = [];
    Object.keys(items).map(key => {
        listItems.push(<li key={key}>{ items[key] }</li>);
        return true;
    });
    return listItems;
}

export default ProjectItem;