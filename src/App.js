import React, { useState } from 'react';
import { Route, Switch, __RouterContext } from "react-router-dom";
import { useTransition, animated} from "react-spring";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import { Spring } from "react-spring/renderprops-universal";

import Home from './pages/Home'
import About from './pages/About'
import NavigationButtons from './components/NavigationButtons'
import ProjectItem from './components/ProjectItem'

import Sidebar from './components/Sidebar'
import { JoinMe } from "./constants/Images";

import './App.css';
import './pages/Projects.css'
import './pages/About.css'
import './components/NavigationButtons.css'

function App() {

    const [projects, setProjects] = useState([
        {
        image: <JoinMe />,
        title: "JoinMe",
        subtitle: "Android App Prototype",
        description: "JoinMe is an Android app which allows users to connect with and meet up with friends \n" +
                     "at various locations around Loyola's campus. It implements a friends system and has a main dashboard displaying \n" +
                     "a user's friends, those friends' locations, and how long it has been since they got there.",
        technologies: ["Java", "Google Firebase (Realtime Database)", "Google Firebase (Authentication)"],
        tools: ["Android Studio"]
        },
    ]);

    let parallax;
    return (
        <div className="app">
            <Sidebar/>
            <Parallax ref={ref => (parallax = ref)} pages={3}>
                <ParallaxLayer offset={0} speed={0}>
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
                                            <button onClick={() => parallax.scrollTo(1)}><span>About</span></button>
                                            <button onClick={() => parallax.scrollTo(2)}><span>Projects</span></button>
                                        </div>
                                    </div>
                                )}
                            </Spring>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0}>
                    <div className="about container">
                        <div className="about content">
                            <h2>About.</h2>
                            <h4>Education</h4>
                            <h5>Loyola University Chicago</h5>
                            <h6>Computer Science (BS) + Vocal Performance (BA)</h6>
                            <h6><em>Projected Graduation 2022</em></h6>
                            <br />
                            <div className="home navigation-buttons">
                                <button onClick={() => parallax.scrollTo(0)}><span>Home</span></button>
                                <button onClick={() => parallax.scrollTo(2)}><span>Projects</span></button>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0}>
                    <div className="projects container">
                        <div className="projects content">
                            <h2 className='projects title'>Projects.</h2>
                            <div>
                                {
                                    projects.map((project, index) => (
                                        <ProjectItem key={index} index={index} project={project}/>
                                    ))
                                }
                            </div>
                            <div className="home navigation-buttons">
                                <button onClick={() => parallax.scrollTo(0)}><span>Home</span></button>
                                <button onClick={() => parallax.scrollTo(1)}><span>About</span></button>
                            </div>
                        </div>
                    </div>
                </ParallaxLayer>
            </Parallax>
        </div>
    );


}

export default App;

//   const { location } = useContext(__RouterContext);
//   const transitions = useTransition(location, location => location.pathname, {
//       from: { opacity: 0, transform: "translateY(100%)" },
//       enter: { opacity: 1, transform: "translateY(0%)" },
//       leave: { opacity: 0, transform: "translateY(-100%)"}
//   });
//
// return (
//     <div className="app">
//         <Sidebar/>
//         <main>
//             {transitions.map(({ item, props, key }) => (
//                  <animated.div key={key} style={props }>
//                      <Switch location={item}>
//                          <Route exact path="/" component={Home}/>
//                          <Route path="/about" component={About}/>
//                      </Switch>
//                  </animated.div>
//             ))}
//         </main>
//     </div>
// );