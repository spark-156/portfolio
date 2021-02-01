// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import { Navbar } from './components/Navbar';
import { AboutSlide } from './components/AboutSlide';

import { useFetch } from './lib/apiHandler';

import { Spin } from 'antd';
import 'antd/dist/antd.css';

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

  const containerLoading = (<div class="background">
    <Spin size="large" id="spinner" style={{position: "absolute", top: "50%", left: "50%"}}/>
    </div>);

  const containerLoaded = (<div class="background">
    <Navbar about={about} />
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <AboutSlide about={about} />
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>);

  return loading.loading ? containerLoading : containerLoaded;
};
