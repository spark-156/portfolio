import React, { useState, useEffect } from 'react';

//import antd
import { Spin } from 'antd';

// import swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectCube, Autoplay } from 'swiper';

// init swiper
SwiperCore.use([EffectCube, Autoplay]);

export default function About({ about, images }) {
    const loading = false;
    console.log('about', about)
    console.log('images', images)
    return loading ? <Spin id="loading" /> : (
        <>
            <section id="aboutTop" className="blackBorder">
                <div id="aboutTopName">{about[0].name}</div>
                
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
                            {/* src={`/api/images/id/${image._id}`} */}
                            <img className="aboutImage" alt={image.alt} src={image.src} />
                            <div className="aboutDescriptionBackground">
                                <div className="aboutDescription">{about[0].description}</div>
                            </div>
                        </SwiperSlide>
                    )
                })) : (<SwiperSlide>
                    <img className="aboutImage" alt="404 not found" src="/404.png" />
                    <div className="aboutDescriptionBackground">
                        <div className="aboutDescription">No about found, please try again later!</div>
                    </div>
                </SwiperSlide>)}
            </Swiper>
        </>
    )
}
