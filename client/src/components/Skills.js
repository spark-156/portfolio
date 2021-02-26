import React, { useState, useEffect } from 'react';
import { Spin, Row, Col } from 'antd';

export default function skills({ isAdmin }) {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true)
    const backgroundColors = ["#DD0100", "#225095", "#FAC901"];

    useEffect(() => {
        const getSkills = () => {
            fetch('/api/skills/latest')
                .then(res => { return res.json() })
                .then(skills => { setSkills(skills[0].skills); setLoading(false) })
        }
        getSkills();
    }, []);

    return loading ? <Spin id="loading" /> : (
        <div id="skills" style={{color: "#ffffff", backgroundColor: "#000000" }} className="blackBorder">
            {skills.map((skill, index) => { 
                return (
                    <Row key={`skill${index}`} gutter={10}>
                        <Col span={10}>
                            <div className="skillsName">{skill.skillName}</div>
                        </Col>
                        <Col span={14}>
                            <span className="skillsBar" style={{backgroundColor: backgroundColors[index % backgroundColors.length], width: `${skill.skillGrade}%`, display: "block", height: "95%"}}/>
                        </Col>
                    </Row>
                )
            })}
        </div>
    )
}
