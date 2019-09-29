import React from 'react'

import "./Home.css"

import NavigationButtons from '../components/NavigationButtons'
import { FadeIn } from "../components/AnimationWrappers";

function Home (props) {

    const scrollTo = (page) => {
        props.scrollTo(page);
    };

    return (
            <div className="home content">
                <div className="home text-container">
                    <FadeIn delay={0} duration={1000}>
                        <h1>Hi.</h1>
                    </FadeIn>
                    <FadeIn delay={1000} duration={1000}>
                        <h5>I'm Henry Fellerhoff - a computer programmer passionate about diving into projects and learning new things.</h5>
                    </FadeIn>
                </div>
                <FadeIn delay={2000} duration={1000} style={{ marginTop: 20 }}>
                    <NavigationButtons pages={['About', 'Projects', 'Contact']} scrollTo={scrollTo}/>
                </FadeIn>
            </div>
    )
}

export default Home;