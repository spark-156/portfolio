import React from 'react';

export function Navbar({ about }) {
    return (<div id="navbar">
            <div id="navbarLeft">{about.name}</div>
            <div id="navbarRight">
                <button>Projects</button>
                <button>Contact</button>
            </div>
        </div>)
}