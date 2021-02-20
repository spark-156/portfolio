import React, { useState, useEffect } from 'react';
import { Spin, Col, Row } from 'antd';

import "./projects.css";

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCube, Autoplay } from 'swiper';

// init swiper
SwiperCore.use([EffectCube, Autoplay]);

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProjects = async () => {
            fetch('/api/projects/all')
                .then(res => { return res.json() })
                .then(projects => { setProjects(projects); setLoading(false) })
        }
        getProjects();
    }, []);

    useEffect(() => {
        console.log("projects", projects)
    }, [projects])

    // TODO update Spin loading to better fit inside the painting
    return loading ? <Spin id="loading" /> : (
        <>
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
            >
                {projects.map((project, index) => {
                    return (
                        <SwiperSlide key={`project${index}`}>
                            <Row className="projectsTop">
                                <Col span={14}>
                                    <img className="projectImage" src={`/api/projects/id/${project._id}/image`} alt="project" />
                                </Col>
                                <Col className="projectsText" span={10}>
                                    <br />
                                    <h2 className="projectsText">{project.title}</h2>
                                    <p>{(new Date(project.startDate)).toLocaleDateString()}</p>
                                    <p>{project.endDate ? new Date(project.startDate).toLocaleDateString() : "ongoing"}</p>
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
        // <section id="projectPage">
        //     <section id="projectContainer">
        //         {projects.map(project => {
        //             return (
        //                 <Card className="projectCard"
        //                 key={project._id}
        //             onClick={handleOpenCard}
        //             cover={<img alt="project" src={`/api/projects/id/${project._id}/image`} />}
        //         >
        //             {/* <h2 className="projectCardTitle">{project.title}</h2>
        //             <p className="projectCardDescription">{project.description}</p> */}
        //             <Meta title={project.title} description={project.description} />
        //             <p className="projectCardStatus">Status: {project.endDate ? "Finished" : "In progress"}</p>
        //         </Card>)
        //         })}
        //     </section>
        // </section>
    )
}
