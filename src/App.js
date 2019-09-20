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
        description: 'JoinMe is an Android app designed to facilitate easy, informal meet ups among friends. \n' +
            'It includes a friends system with database integration and a clear dashboard with the user’s friends’ current locations.',
            technologies: ["Java", "Google Firebase (Database & Authentication)"],
        tools: ["Android Studio", 'Git/GitHub']
        },
        {
            filename: 'checkers.png',
            title: "Checkers",
            subtitle: "Game",
            description: 'A simple yet fully functional and visually appealing implementation of the classic game \n' +
                'of Checkers. It implements all standard Checkers rules, including capturing, kinging, and victory conditions.',
            technologies: ["Python", "Tkinter"],
            tools: ["PyCharm", 'Git/GitHub']
        },
        {
            filename: 'portfolio.png',
            title: "Portfolio",
            subtitle: "Website",
            description: 'This portfolio site was built with the goal of being functional, \n' +
                'responsive, and unique, helping me to gain proficiency in HTML, CSS, JavaScript, and the React.js \n' +
                'framework. Animations are accomplished using the react-spring library.',
            technologies: ["HTML", 'CSS', "JavaScript", 'React.js'],
            tools: ["WebStorm", 'Git/GitHub']
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