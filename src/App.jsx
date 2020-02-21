import React from 'react';
import { Route } from 'react-router-dom'
import Header from './components/header/Header'
import AboutMe from './components/about-me/AboutMe';
import Skills from './components/skills/Skills'
// import Resume from './components/resume/Resume';


import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Route exact path="/" component={AboutMe} />
            <Route exact path="/skills" component={Skills} />
            
            {/* <Route path="/resume" component={Resume} /> */}
        </div>
    );
}

export default App;
