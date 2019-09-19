import React from 'react'
import './Sidebar.css'

import logo from "../images/websitelogo.png";
import resume from '../images/resume.png'
import linkedin from "../images/linkedin.png";
import github from "../images/github.png"

const Sidebar = (props) => {
    return (
        <div className="sidebar container">
            <div className="sidebar upper">
                <img src={logo} className="sidebar-icon logo" alt='Logo' onClick={() => props.scrollTo(3)}/>
                <a href="https://drive.google.com/open?id=1iUZ6TGW3A1Oevn0dW2vtmnrFpknKlDkV" target="_blank" rel='noopener noreferrer'>
                    <img src={resume} className="sidebar-icon upper" alt='Resume'/>
                </a>
            </div>
            <div className="sidebar lower">
                <a href="https://www.linkedin.com/in/henry-fellerhoff-b43365174/" target="_blank" rel='noopener noreferrer'>
                    <img src={linkedin} className="sidebar-icon lower" alt='LinkedIn'/>
                </a>
                <a href="https://github.com/hfellerhoff" target="_blank" rel='noopener noreferrer'>
                    <img src={github} className="sidebar-icon lower" alt='Github'/>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;