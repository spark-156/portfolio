import React, { useState, useEffect } from 'react';
import { Col, Row } from 'antd';


// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCube, Autoplay } from 'swiper';

// init swiper
SwiperCore.use([EffectCube, Autoplay]);

export default function Projects({ projects }) {
    const [swiper, setSwiper] = useState(null);
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);

    const borderColors = ["#DD0100", "#225095", "#FAC901"];

    return <>
            {projects.length > 0 ? (<section id="projectsList" className="blackBorder">
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
            </section>) : <section id="projectsList" className="blackBorder" >
                        <ul>
                            <li key="noprojectfound" id="activeProject" style={{ borderColor: borderColors[0 % borderColors.length] }}>No projects found!</li>
                        </ul>
            </section>}
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
                {projects.length > 0 ? (projects.map((project, index) => {
                    return (
                        <SwiperSlide key={`project${index}`} className={"projects"}>
                            <Row className="projectsTop">
                                <Col className="projectsTopCol" span={14}>
                                    <img className="projectImage" src={project.imgSrc} alt="project" />
                                    <div className="projectImageOverlay"></div>
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
                })) : (<SwiperSlide>
                    <Row className="projectsTop">
                        <Col className="projectsTopCol projectsText">
                            <div>No projects found, please check again later!</div>
                        </Col>
                    </Row>
                    <Row className="projectsBottom" />
                </SwiperSlide>)
                }
            </Swiper>
        </>
}
