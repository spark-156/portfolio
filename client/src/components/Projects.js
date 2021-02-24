import React, { useState, useEffect } from 'react';
import { Spin, Col, Row } from 'antd';

import "./projects.css";

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCube, Autoplay } from 'swiper';

// init swiper
SwiperCore.use([EffectCube, Autoplay]);

export default function Projects({ isAdmin }) {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true)
    const [swiper, setSwiper] = useState(null);
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);

    useEffect(() => {
        const getProjects = async () => {
            fetch('/api/projects/all')
                .then(res => { return res.json() })
                .then(projects => { setProjects(projects); setLoading(false) })
        }
        getProjects();
    }, []);

    useEffect(() => {
        console.log("Projects:", projects)
    }, [projects])

    const borderColors = ["#DD0100", "#225095", "#FAC901"];

    // TODO update Spin loading to better fit inside the painting
    return loading ? <Spin id="loading" /> : (
        <>
            <section id="projectsList" className="blackBorder">
                {swiper ? (
                    <ul>
                        {projects.map((project, index) => {
                            return (
                                <li
                                    key={`project${index}`}
                                    onClick={() => swiper.slideTo(index + 1, 1000, true)}
                                    id={index === activeProjectIndex ? "activeProject" : ""}
                                    style={{ borderColor: borderColors[index % borderColors.length] }}
                                >
                                    {project.title}
                                </li>
                            )
                        })}
                    </ul>
                ) : <div>Loading projects</div>}
            </section>
            <Swiper
                style={{ width: "100%", height: "100%" }}
                id="projects"
                className="blackBorder"
                loop="true"
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: true,
                }}
                effect="cube"
                cubeEffect={{ shadow: false }}
                onInit={swiperInstance => { setSwiper(swiperInstance) }}
                onSlideChange={(swiper) => { setActiveProjectIndex(swiper.realIndex); }}
            >
                {projects.map((project, index) => {
                    return (
                        <SwiperSlide key={`project${index}`}>
                            <Row className="projectsTop">
                                <Col className="projectsTopCol" span={14}>
                                    <img className="projectImage" src={`/api/projects/id/${project._id}/image`} alt="project" />
                                </Col>
                                <Col className="projectsText projectsTopCol" span={10}>
                                    <br />
                                    <h2 className="projectsText">{project.title}</h2>
                                    <p>{(new Date(project.startDate)).toLocaleDateString()}</p>
                                    <p>{project.endDate ? new Date(project.startDate).toLocaleDateString() : "Still ongoing"}</p>
                                    <p>{project.company}</p>
                                </Col>
                            </Row>
                            <Row className="projectsBottom">
                                <Col span={24} className="projectsText">
                                    <p>{project.description}</p>
                                </Col>
                            </Row>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    )
}
