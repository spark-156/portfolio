import React, { useState, useEffect } from 'react';
import { Spin, Row, Col } from 'antd';

export default function Projects({ setLoading, loading }) {
    const [skills, setSkills] = useState([{ skill: "Javascript", percentage: 5 }, { skill: "Python", percentage: 70 }, { skill: "HTML", percentage: 30 }, { skill: "CSS", percentage: 80 }]);

    const backgroundColors = ["#DD0100", "#225095", "#FAC901"];

    useEffect(() => {
        const getSkills = () => {
            fetch('/api/skills/all')
                .then(res => { return res.json() })
                .then(skills => { setSkills(skills); setLoading(false) })
        }
        // getSkills();
    }, []);

    return loading ? <Spin id="loading" /> : (
        <div id="skills" style={{color: "#ffffff", backgroundColor: "#000000" }} className="blackBorder">
            {skills.map((skill, index) => { 
                return (
                    <Row gutter={10}>
                        <Col span={10}>
                            <div className="skillsName">{skill.skill}</div>
                        </Col>
                        <Col span={14}>
                            <span className="skillsBar" style={{backgroundColor: backgroundColors[index % backgroundColors.length], width: `${skill.percentage}%`, display: "block", height: "95%"}}/>
                        </Col>
                    </Row>
                )
            })}
        </div>
    )
}
