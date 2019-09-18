import React from 'react'
import {Spring} from "react-spring/renderprops-universal";

import "./Home.css"
import arrow from '../images/arrow.png';

function Home(props) {

    const scrollTo = (page) => {
        props.scrollTo(page);
    };

    return (
        <div className="home container">
            <div className="home content">
                <div className="home text-container">
                    <Spring
                        from={{ opacity: 0}}
                        to={{ opacity: 1}}
                        config={{ delay: 0, duration: 1000}}>
                        { props => (
                            <div style={props}>
                                <h1>Hi.</h1>
                            </div>
                        )}
                    </Spring>
                    <Spring
                        from={{ opacity: 0}}
                        to={{ opacity: 1}}
                        config={{ delay: 1000, duration: 1000}}>
                        { props => (
                            <div style={props}>
                                <h5>I'm Henry Fellerhoff - a computer programmer passionate about diving into projects and learning new things.</h5>
                            </div>
                        )}
                    </Spring>
                </div>
                <Spring from={{ opacity: 0}}
                        to={{ opacity: 1}}
                        config={{ delay: 2000, duration: 1000}}>
                    { props => (
                        <div style={props}>
                            <div className="home navigation-buttons">
                                <button onClick={() => scrollTo(1)}><span>About</span></button>
                                <button onClick={() => scrollTo(2)}><span>Projects</span></button>
                            </div>
                        </div>
                    )}
                </Spring>
            </div>
            <Spring from={{ opacity: 0}}
                    to={{ opacity: 1}}
                    config={{ delay: 3000, duration: 1000}}>
                { props => (
                    <div style={props}>
                        <img src={arrow} className='arrow-image' alt='Arrow' />
                        <p className='contact-text'>Contact Me!</p>
                    </div>
                )}
            </Spring>
        </div>
    )
}

export default Home;