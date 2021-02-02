import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar({ about }) {
    return (
        <nav className="nav-container">
            <ul className="nav-unordered-list">
                <li className="nav-list-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/Projects">Projects</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/Contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}
