import React from 'react';

import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Skills from '../components/Skills';
import Admin from '../components/Admin';

import './Home.css';
import '../css/Loading.css';

export default function Home({ isAdmin }) {

    return (
        <section id="gridContainer" style={{aspectRatio: 1 / 1}}>
            <div id="d1" className="blackBorder"/><div className="blackBorder" id="d2"/><div className="blackBorder"id="d3"/><div className="blackBorder"id="d4"/><div className="blackBorder"id="d5"/><div className="blackBorder"id="d6"/><div className="blackBorder"id="d7"/><div className="blackBorder"id="d8"/><div className="blackBorder" id="d9"/><div className="blackBorder"id="d10"/><div className="blackBorder"id="d11"/><div className="blackBorder"id="d12"/><div className="blackBorder" id="d13"/><div id="d14" className="blackBorder"/><div id="d15" className="blackBorder"/><div id="d16" className="blackBorder"/><div id="d17" className="blackBorder"/><div id="d18" className="blackBorder"/>
            <About isAdmin={isAdmin} />
            <Projects isAdmin={isAdmin} />
            <Contact isAdmin={isAdmin} />
            <Skills isAdmin={isAdmin} />
            {isAdmin ? <Admin /> : null}
        </section>
    )
}
