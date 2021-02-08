import React, { useState, useEffect } from 'react';
import { Card, Space, Image, Spin, Row, Col } from 'antd';

import "./projects.css";
import './Loading.css';

const { Meta } = Card;

export default function Projects({ setLoading, loading }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = () => {
            fetch('/api/projects/all')
                .then(res => { return res.json() })
                .then(projects => { setProjects(projects); setLoading(false) })
        }
        // const getImages = () => {
        //     fetch('/api/images/all')
        //         .then(res => { return res.json() })
        //         .then(images => { setImages(images); setLoading(false) })
        // }
        getProjects();
        // getImages();
    }, []);

    const handleOpenCard = (e) => {
        console.log("clicked", "\n", e);
        console.log(projects)
    }

    //TODO import and use swiper instead of horizontal scrolling

    return loading ? <Spin id="loading" /> : (
        <section id="projectPage">
            <section id="projectContainer">
                {projects.map(project => {
                    return (
                        <Card className="projectCard"
                        key={project._id}
                    onClick={handleOpenCard}
                    cover={<img alt="project" src={`/api/projects/id/${project._id}/image`} />}
                >
                    {/* <h2 className="projectCardTitle">{project.title}</h2>
                    <p className="projectCardDescription">{project.description}</p> */}
                    <Meta title={project.title} description={project.description} />
                    <p className="projectCardStatus">Status: {project.endDate ? "Finished" : "In progress"}</p>
                </Card>)
                })}
            </section>
        </section>
    )
}
