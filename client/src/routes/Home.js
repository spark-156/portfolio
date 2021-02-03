import React, { useState, useEffect } from 'react';
import { Image, Spin, Row, Col } from 'antd';
import MediaQuery from 'react-responsive'

import './Home.css';
import './Loading.css';



export default function Home({ isMobile, mobileWidth, setLoading, loading }) {
    const [images, setImages] = useState(null);
    const [about, setAbout] = useState(null);
    
    //TODO fix crash upon switching to mobile or desktop size

    useEffect(() => {
        setLoading(true);
        const getAbout = () => {
            fetch('/api/about/latest')
                .then(res => { return res.json() })
                .then(about => { setAbout(about) })
        }
        const getImages = () => {
            fetch('/api/images/all')
                .then(res => { return res.json() })
                .then(images => { setImages(images); setLoading(false) })
        }
        getAbout();
        getImages();
    }, [setLoading, isMobile]);

    return loading ? <Spin size="large" id="loading" /> : (
        <div>
            <div id="name">{about[0].name}</div>
            <div id="description">{about[0].description}</div>
            <MediaQuery minDeviceWidth={mobileWidth}>
                <Image.PreviewGroup>
                    <Row id="imageContainer">
                        {images.slice(-4).map(image => { return <Col span={6}><Image width="100%" height="100%" alt={image.alt} src={`/api/images/id/${image._id}`} /></Col> })}
                    </Row>
                </Image.PreviewGroup>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={mobileWidth}>
                <Row id="imageContainer">
                    <Col span={24}><Image width="100%" height="100%" alt={images[0].alt} src={`/api/images/id/${images[0]._id}`} /></Col>
                </Row>
            </MediaQuery>
        </div>
    )
}
