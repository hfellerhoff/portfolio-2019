import React, { useState } from 'react';
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import { ContactArrow, HomeArrow, ResumeArrow } from "./pages/Arrows";

import './App.css';

function App() {

    const [projects] = useState([
        {
        filename: 'joinme.png',
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

    const handleScroll = (page) => {
        parallax.scrollTo(page);
    };

    return (
        <div className="app">
            <Sidebar scrollTo={handleScroll}/>
            <Parallax ref={ref => (parallax = ref)} pages={4}>
                <ParallaxLayer offset={0} speed={0}>
                    <div className='home container' />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={3}>
                    <HomeArrow />
                </ParallaxLayer>
                <ParallaxLayer offset={0} speed={0}>
                    <Home scrollTo={handleScroll}/>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0}>
                    <About scrollTo={handleScroll} />
                </ParallaxLayer>
                <ParallaxLayer offset={2} speed={0}>
                    <Projects projects={projects} scrollTo={handleScroll}/>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0}>
                    <div className='contact container' />
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={10}>
                    <ContactArrow/>
                    <ResumeArrow/>
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0}>
                    <Contact scrollTo={handleScroll}/>
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