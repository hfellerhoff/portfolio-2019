import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { ContactArrow, HomeArrow, ResumeArrow } from './components/Arrows';

import './App.css';

function Portfolio() {
  const projects = [
    {
      filename: 'joinme.png',
      title: 'JoinMe',
      subtitle: 'Android App',
      description:
        'JoinMe is an Android app designed to facilitate easy, informal meet ups among friends. \n' +
        'It includes a friends system with database integration and a clear dashboard with the user’s friends’ current locations.',
      technologies: ['Java', 'Google Firebase (Database & Authentication)'],
      tools: ['Android Studio', 'Git/GitHub'],
    },
    {
      filename: 'checkers.png',
      title: 'Checkers',
      subtitle: 'Game',
      description:
        'A simple yet fully functional and visually appealing implementation of the classic game \n' +
        'of Checkers. It implements all standard Checkers rules, including capturing, kinging, and victory conditions.',
      technologies: ['Python', 'Tkinter'],
      tools: ['PyCharm', 'Git/GitHub'],
    },
    {
      filename: 'portfolio.png',
      title: 'Portfolio',
      subtitle: 'Website',
      description:
        'This portfolio site was built with the goal of being functional, \n' +
        'responsive, and unique, helping me to gain proficiency in HTML, CSS, JavaScript, and the React.js \n' +
        'framework. Animations are accomplished using the react-spring library.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React.js'],
      tools: ['WebStorm', 'Git/GitHub'],
    },
  ];

  const aboutPages = [
    {
      title: 'Education',
      subtitle: 'Loyola University Chicago',
      details: 'Computer Science (BS) + Vocal Performance (BA)',
      italicDetails: 'August 2018 - May 2022',
    },
    {
      title: 'Languages',
      html: (
        <div>
          <ul>
            <li>Java (4 years)</li>
            <li>Python (2 years)</li>
            <li>JavaScript/TypeScript + HTML + CSS (2 years)</li>
            <li>Swift (1 year)</li>
          </ul>
          <br />
          <h4>Frameworks & Tools</h4>
          <ul>
            <li>React (2 years)</li>
            <li>React Native (2 years)</li>
            <li>Git + GitHub/BitBucket</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Awards',
      subtitle: "Dean's List",
      italicDetails: 'August 2018 – Present',
      html: (
        <div>
          <h5 style={{ marginTop: 20 }}>National Merit Finalist</h5>
          <h6>
            <em>February 2017</em>
          </h6>
          <p>
            An award distributed by the National Merit Scholarship Corporation
            which recognizes 15,000 out of the roughly 1.6 million students who
            take the PSAT/NMSQT for their academic achievement.
          </p>
        </div>
      ),
    },
  ];

  let parallax;

  const handleScroll = page => {
    parallax.scrollTo(page);
  };

  return (
    <div className='app'>
      <Sidebar scrollTo={handleScroll} />
      <Parallax ref={ref => (parallax = ref)} pages={4}>
        <ParallaxLayer offset={0} speed={0}>
          <div className='home container' />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={3}>
          <HomeArrow />
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0}>
          <Home scrollTo={handleScroll} />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0}>
          <About pages={aboutPages} scrollTo={handleScroll} />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0}>
          <Projects projects={projects} scrollTo={handleScroll} />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}>
          <div className='contact container' />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={10}>
          <ContactArrow />
          <ResumeArrow />
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0}>
          <Contact scrollTo={handleScroll} />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default Portfolio;
