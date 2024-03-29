import React from 'react';

import '../pages/Projects.css';
import GalleryArrow from './GalleryArrow';

function ProjectItem({
  project: { title, subtitle, description, technologies, tools },
  onClick,
  image,
}) {
  return (
    <div className='project-item container'>
      <div className='project-item header'>
        <GalleryArrow direction='left' onClick={onClick} />
        <h2>Projects.</h2>
        <GalleryArrow direction='right' onClick={onClick} />
      </div>
      <div className='project-item image-container fade-in'>{image}</div>
      <div className='project-item title fade-in'>
        <h5>{title}</h5>
        <h6>{subtitle}</h6>
      </div>
      <div className='project-item description fade-in'>
        <p>{description}</p>
      </div>
      <div className='project-item list-header technologies fade-in'>
        <h6>Technologies</h6>
        <ul>{getListItems(technologies)}</ul>
      </div>
      <div className='project-item list-header tools fade-in'>
        <h6>Tools</h6>
        <ul>{getListItems(tools)}</ul>
      </div>
    </div>
  );
}

function getListItems(items) {
  let listItems = [];
  Object.keys(items).map(key => {
    listItems.push(<li key={key}>{items[key]}</li>);
    return true;
  });
  return listItems;
}

export default ProjectItem;
