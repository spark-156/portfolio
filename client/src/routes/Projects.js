import React, { useState, useEffect } from 'react';
import { Space, Card, Image, Spin, Row, Col } from 'antd';

const { Meta } = Card;

export default function Projects({ isMobile, mobileWidth, setLoading, loading }) {
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
    }

    return loading ? <Spin id="loading"/> : (
        <Space id="projects">
            {projects.map(project => {
                return (<Card 
                    onClick={handleOpenCard}
                    hoverable
                    className="projectCard"
                    cover={<img alt={project.title} src={`/api/projects/id/${project._id}/image`}/>}
                >
                    <Meta title={project.title} description={`${project.description}...`} />
                </Card>)
            })}
        </Space>
    )
}
