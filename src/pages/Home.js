import React from 'react'
import {Spring} from "react-spring/renderprops-universal";

import "./Home.css"
import arrow from '../images/arrow.png';

import NavigationButtons from '../components/NavigationButtons'

function Home(props) {

    const scrollTo = (page) => {
        props.scrollTo(page);
    };

    return (
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
                            <NavigationButtons pages={['About', 'Projects']} scrollTo={scrollTo}/>
                        </div>
                    )}
                </Spring>
            </div>
    )
}

{/*<div className="home container">*/}
{/*</div>*/}


export default Home;