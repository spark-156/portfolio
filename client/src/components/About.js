import React, { useState, useEffect } from 'react';

import { Spin } from 'antd';

import './About.css';

export default function About({ loading, setLoading }) {
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
        <>
        <section id="aboutTop" className="blackBorder">
            <div>Luca Bergman</div>
        </section>
        <section id="aboutBottom" className="blackBorder">
            <div>Luca Bergman 2</div>
        </section>
        </>
    )
}
