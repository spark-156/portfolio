import React, { useState, useEffect } from 'react';
import { Space, Card, Image, Spin, Row, Col } from 'antd';

export default function Projects({ isMobile, mobileWidth, setLoading, loading }) {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjects = () => {
            fetch('/api/projects/all')
                .then(res => { return res.json() })
                .then(projects => { setProjects(projects) })
        }
        // const getImages = () => {
        //     fetch('/api/images/all')
        //         .then(res => { return res.json() })
        //         .then(images => { setImages(images); setLoading(false) })
        // }
        getProjects();
        // getImages();
    }, []);

    return loading ? <Spin id="loading"/> : (
        <Space id="projects">
            
        </Space>
    )
}