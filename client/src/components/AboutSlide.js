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

    return (<div className="swiper-slide">
        <p>{loading ? "Loading" : about.name}</p>
        <p>{loading ? "Loading" : about.text}</p>
    </div>)
}