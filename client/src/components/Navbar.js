import React from 'react';

export function Navbar({ about }) {
    return (<div>
            <div id="navbarLeft">{about.name}</div>
            <div id="nabarRight">Projects Contact</div>
        </div>)
}