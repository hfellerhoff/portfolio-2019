import React from 'react'
import {Spring} from "react-spring/renderprops-universal";

import './Sidebar.css'

import logo from "../images/websitelogo.png";
import resume from "../images/resume.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png"

function Sidebar() {
    return (
        <SidebarStatic/>
    );
}

function SidebarStatic() {
    return (
        <div className="sidebar container">
            <div className="sidebar upper">
                <a href="/#">
                    <img src={logo} className="sidebar-icon logo"/>
                </a>
            </div>
            <div className="sidebar lower">
                <a href="https://www.linkedin.com/in/henry-fellerhoff-b43365174/" target="_blank">
                    <img src={linkedin} className="sidebar-icon lower"/>
                </a>
                <a href="https://github.com/hfellerhoff" target="_blank">
                    <img src={github} className="sidebar-icon lower"/>
                </a>
            </div>
        </div>
    )
}

export default Sidebar;

{/*<Spring*/}
{/*    from={{ opacity: 0}}*/}
{/*    to={{ opacity: 1}}*/}
{/*    config={{ delay: 2500, duration: 1000}}>*/}
{/*    { props => (*/}
{/*        <div style={props}>*/}
{/*            <SidebarStatic/>*/}
{/*        </div>*/}
{/*    )}*/}
{/*</Spring>*/}