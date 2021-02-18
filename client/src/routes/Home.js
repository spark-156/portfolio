import React, { useState, useEffect } from 'react';
import { Image, Spin, Row, Col } from 'antd';
import MediaQuery from 'react-responsive'

import './Home.css';
import './Loading.css';

export default function Home({ isMobile, mobileWidth, setLoading, loading }) {
    const [images, setImages] = useState([{}]);
    const [about, setAbout] = useState([{ name: "", description: "" }]);

    useEffect(() => {
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
    }, []);

    return loading ? <Spin id="loading" /> : (
        <section id="gridContainer">
            <div id="helloWorld">HelloWorld!</div>
        </section>
    )
}
