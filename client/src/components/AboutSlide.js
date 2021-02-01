// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export function AboutSlide({ about }) {
    
    return (<div id="aboutSlide" className="swiper-slide">
        <div>{about.name}</div>
        <div>{about.text}</div>
    </div>)
}