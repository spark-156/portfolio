import React, { useState, useEffect } from 'react';

import { useFetch } from '../lib/apiHandler';

export function AboutSlide() {
    const [about, setAbout] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const tempAbout = useFetch('/api/about/');

    useEffect(() => {
        if (tempAbout !== null) {
            setLoading(false)
            setAbout(tempAbout);
        }
    }, [tempAbout]);

    // TODO change "loading..." to beautiful loading symbol
    return (<div id="aboutSlide" className="swiper-slide">
        <div>{loading ? "Loading..." : about.name}</div>
        <div>{loading ? "Loading..." : about.text}</div>
    </div>)
}