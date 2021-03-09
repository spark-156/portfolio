import React, { useState, useEffect } from 'react';

//import antd
import { Spin } from 'antd';

import './About.css';

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCube, Autoplay } from 'swiper';

// init swiper
SwiperCore.use([EffectCube, Autoplay]);

export default function About({ isAdmin }) {
    const [loading, setLoading] = useState(true);
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
                <div id="aboutTopName">{about.length > 0 ? about[0].name : "Luca Bergman"}</div>
                
            </section>

            <Swiper
                style={{width: "100%"}}
                id="aboutBottom"
                className="blackBorder"
                loop="true"
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                effect="cube"
                cubeEffect={{ shadow: false }}
            >
                {images.length > 0 ? (images.map((image, index) => {
                    return (
                        <SwiperSlide key={`image${index}`}>
                            <img className="aboutImage" alt={image.alt} src={`/api/images/id/${image._id}`} />
                            <div className="aboutDescriptionBackground">
                                <div className="aboutDescription">{about.length > 0 ? about[0].description : "No About found!"}</div>
                            </div>
                        </SwiperSlide>
                    )
                })) : (<SwiperSlide>
                    <img className="aboutImage" alt="404 not found" src="../images/404.png" />
                    <div className="aboutDescriptionBackground">
                        <div className="aboutDescription">No about found, please try again later!</div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </>
    )
}
