// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import { Navbar } from './components/Navbar';
import { AboutPage } from './components/AboutPage';

import { useFetch } from './lib/apiHandler';

// Ant Design imports
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
    <AboutPage about={about} />
  </div>);

  return loading.loading ? containerLoading : containerLoaded;
};
