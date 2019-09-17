import React, { useState, useEffect } from 'react'

import '../pages/Projects.css'

function ProjectItem({ project, index }) {
    // const image = require(project.image);
    return (
        <div className="project-item container top">
            {project.image}
            <div className="project-item details-1">
                <h5 className="project-item title">{project.title}</h5>
                <h6 className="project-item subtitle">{project.subtitle}</h6>
                <p className="project-item description">{project.description}</p>
            </div>
            <div className="project-item details-2">
                <div style={{flex: 1}}>
                    <h6 className="project-item list-header">Technologies</h6>
                    <ul>{ getListItems(project.technologies) }</ul>
                </div>
                <div style={{flex: 1}}>
                    <h6 className="project-item list-header">Tools</h6>
                    <ul>{ getListItems(project.tools) }</ul>
                </div>
            </div>
        </div>
    )
}

function getListItems(items) {
    let listItems = [];
    Object.keys(items).map(key => {
        listItems.push(<li>{ items[key] }</li>);
    })
    return listItems;
}

export default ProjectItem;