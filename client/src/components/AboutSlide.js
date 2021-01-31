// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export function AboutSlide({ about, loading }) {
    
    // TODO change "loading..." to beautiful loading symbol
    return (<div id="aboutSlide" className="swiper-slide">
        <div>{loading ? "Loading..." : about.name}</div>
        <div>{loading ? "Loading..." : about.text}</div>
    </div>)
}