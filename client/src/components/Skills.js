import React, { useState, useEffect } from 'react';
import { Card, Space, Image, Spin, Row, Col } from 'antd';

import "./Skills.css";

const { Meta } = Card;

export default function Projects({ setLoading, loading }) {
    const [skills, setSkills] = useState([{ skill: "Javascript", percentage: 50 }, { skill: "Python", percentage: 50 }]);

    useEffect(() => {
        const getSkills = () => {
            fetch('/api/skills/all')
                .then(res => { return res.json() })
                .then(skills => { setSkills(skills); setLoading(false) })
        }
        // getSkills();
    }, []);

    //TODO import and use swiper instead of horizontal scrolling

    return loading ? <Spin id="loading" /> : (
        <div id="skills" className="blackBorder">
            {skills.map(skill => {
                return (
                    <div>
                        {skill.skill}: {skill.percentage}%
                    </div>
                )
            })}
        </div>
    )
}
