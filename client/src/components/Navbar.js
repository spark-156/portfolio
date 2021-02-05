import React from 'react';
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { Space } from 'antd';

export default function Navbar({ about }) {
    return (
        <Space id="navBar" align="center">
            <NavLink id="navLink" to="/">Home</NavLink>
            {/* <NavLink to="/Projects">Projects</NavLink> */}
            <NavLink id="navLink" to="/contact">Contact</NavLink>
        </Space>
    )
}
