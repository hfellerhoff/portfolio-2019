import React from 'react'
import {Spring} from "react-spring/renderprops-universal";

import "./Home.css"

function Home({ children }) {
    return (
        <div className="home container">
            <div className="home content">
                <Spring
                    from={{ opacity: 0}}
                    to={{ opacity: 1}}
                    config={{ delay: 0, duration: 1000}}>
                    { props => (
                        <div style={props}>
                            <Title/>
                        </div>
                    )}
                </Spring>
                <Spring
                    from={{ opacity: 0}}
                    to={{ opacity: 1}}
                    config={{ delay: 1000, duration: 1000}}>
                    { props => (
                        <div style={props}>
                            <Subtitle/>
                        </div>
                    )}
                </Spring>
                <Spring from={{ opacity: 0}}
                        to={{ opacity: 1}}
                        config={{ delay: 2000, duration: 1000}}>
                    { props => (
                        <div style={props}>
                            { children }
                        </div>
                    )}
                </Spring>
            </div>
        </div>
    )
}

function Title() {
    return (
        <h1>Hi.</h1>
    )
}

function Subtitle() {
    return (
        <h2>I'm Henry Fellerhoff - a computer science student passionate about diving into projects and learning new things.</h2>
    )
}



export default Home;