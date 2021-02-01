// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import { Navbar } from './components/Navbar';
import { AboutSlide } from './components/AboutSlide';

import { useFetch } from './lib/apiHandler';

import { Spin } from 'antd';

const spinStyle = {
  height: "100vh",
  width: "100%",
  backgroundColor: "rgba(90, 140, 175, 0.6)"
}

export default function App() {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState({ loading: true });

  const tempAbout = useFetch('/api/about/');

  useEffect(() => {
    if (tempAbout !== null) {
      setAbout(tempAbout);
      setLoading({ loading: false });
    }
  }, [tempAbout]);


  const container = (<div class="background">
    <Navbar about={about} />
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <AboutSlide about={about} />
        <div class="swiper-button-next"></div>
      </div>
    </div>

  </div>)
  return loading.loading ? <Spin style={spinStyle} spinning={loading} /> : container;
};
