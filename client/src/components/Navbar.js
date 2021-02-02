import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export function Navbar({ about }) {
    return (
        <nav className="nav-container">
            <ul className="nav-unordered-list">
                <li className="nav-list-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/Admin">Admin</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/Projects">Projects</NavLink>
                </li>
                <li className="nav-list-item">
                    <NavLink to="/Projects">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}