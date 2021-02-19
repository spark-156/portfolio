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

    useEffect(() => {
        console.log("About and images:", about, images);
    }, [about, images])

    return loading ? <Spin id="loading" /> : (
        <>
            <section id="aboutTop" className="blackBorder">
                <div id="aboutTopName">{about[0].name}</div>
            </section>
            <section id="aboutBottom" className="blackBorder">
                <img id="aboutImage" alt={images[0].alt} src={`/api/images/id/${images[0]._id}`} />
                <div id="aboutDescriptionBackground">
                    <div id="aboutDescription">{about[0].description}</div>
                </div>
            </section>
        </>
    )
}
