// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import { Navbar } from './components/Navbar';
import { AboutSlide } from './components/AboutSlide';
import { LoadingSpinner } from './components/LoadingSpinner';

import { useFetch } from './lib/apiHandler';

export default function App() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const tempAbout = useFetch('/api/about/');

  useEffect(() => {
      if (tempAbout !== null) {
        setAbout(tempAbout);
        setLoading(false);
      } 
  }, [tempAbout]);

  return (
    <div class="background">
      <Navbar about={about} loading={loading} />
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <AboutSlide about={about} loading={loading} />

          <div class="swiper-button-next"></div>
        </div>
      </div>
    </div>);
};
