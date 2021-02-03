import React, { lazy, Suspense, useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import MediaQuery, { useMediaQuery } from 'react-responsive'
import { Row, Col } from 'antd';

import Navbar from "./components/Navbar";
import 'antd/dist/antd.css';

import './App.css';

// pages
const Home = lazy(() => import("./routes/Home"));
const Admin = lazy(() => import("./routes/Admin"));
const NotFoundPage = lazy(() => import("./routes/NotFoundPage"));
const Projects = lazy(() => import("./routes/Projects"));
const Contact = lazy(() => import("./routes/Contact"));


const App = () => {
  const [loading, setLoading] = useState(true);
  const mobileWidth = 1200;

  const isMobile = useMediaQuery({
    query: `(min-device-width: ${mobileWidth})`
  })
  useEffect(() => {
    setLoading(true)
  }, [isMobile])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navbar mobileWidth={mobileWidth} />
        <Switch>
          <Route path="/" exact >
            <div>
              <MediaQuery maxDeviceWidth={mobileWidth}>
                <Row id="Home" className="responsive">
                  <Col span={24}><Home isMobile={isMobile} mobileWidth={mobileWidth} loading={loading} setLoading={setLoading} /></Col>
                </Row>
              </MediaQuery>
              <MediaQuery minDeviceWidth={mobileWidth}>
                <Row id="Home" className="responsive">
                  <Col span={4} />
                  <Col span={16}><Home isMobile={isMobile} mobileWidth={mobileWidth} loading={loading} setLoading={setLoading} /></Col>
                  <Col span={4} />
                </Row>
              </MediaQuery>
            </div>
          </Route>
          <Route path="/projects" exact >
          <div>
              <MediaQuery maxDeviceWidth={mobileWidth}>
                <Row id="Projects" className="responsive">
                  <Col span={24}><Projects isMobile={isMobile} mobileWidth={mobileWidth} loading={loading} setLoading={setLoading} /></Col>
                </Row>
              </MediaQuery>
              <MediaQuery minDeviceWidth={mobileWidth}>
                <Row id="Projects" className="responsive">
                  <Col span={4} />
                  <Col span={16}><Projects isMobile={isMobile} mobileWidth={mobileWidth} loading={loading} setLoading={setLoading} /></Col>
                  <Col span={4} />
                </Row>
              </MediaQuery>
            </div>
          </Route>
          <Route path="/admin" component={Admin} />
          <Route path="/Contact" component={Contact} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;