import React, { useState } from 'react';

import { useFetch } from '../lib/apiHandler';

export function AboutSlide() {
    const [aboutText, setAboutText] = useState(null);
    
    setAboutText(useFetch('/api/about/'))

    return (<div className="swiper-slide">
        <div>{aboutText}</div>
    </div>)
}