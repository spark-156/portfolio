import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

export default function skills({ skills }) {
    const backgroundColors = ["#DD0100", "#225095", "#FAC901"];

    return <div id="skills" style={{color: "#ffffff", backgroundColor: "#000000" }} className="blackBorder">
            {skills.length > 0 ? skills.map((skill, index) => { 
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
            }) : <div>No skills found!</div> }
        </div>
}
