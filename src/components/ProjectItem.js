import React from 'react'

import '../pages/Projects.css'

function ProjectItem({ project: {filename, title, subtitle, description, technologies, tools} }) {
    return (
        <div className="project-item container top">
            <img src={require(`../images/${filename.toLowerCase()}`)} className='project-item image' alt={title} />
            <div className="project-item details-1">
                <h5 className="project-item title">{title}</h5>
                <h6 className="project-item subtitle">{subtitle}</h6>
                <p className="project-item description">{description}</p>
            </div>
            <div className="project-item details-2">
                <div style={{flex: 1}}>
                    <h6 className="project-item list-header">Technologies</h6>
                    <ul>{ getListItems(technologies) }</ul>
                </div>
                <div style={{flex: 1}}>
                    <h6 className="project-item list-header">Tools</h6>
                    <ul>{ getListItems(tools) }</ul>
                </div>
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