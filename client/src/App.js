import React, { lazy, Suspense, useEffect, useState } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
// import { Row, Col } from 'antd';

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
  const minDesktopWidth = 1000;
  const minTabletWidth = 480;


  const isTablet = useMediaQuery({
    query: `(max-device-width: ${minDesktopWidth})`
  })
  const isDesktop = useMediaQuery({
    query: `(min-device-width: ${minDesktopWidth})`
  })
  useEffect(() => {
    setLoading(true)
  }, [isTablet, isDesktop])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact >
            <Home loading={loading} setLoading={setLoading} />
          </Route>
          <Route path="/projects" >
            <Projects loading={loading} setLoading={setLoading} />
          </Route>

          <Route path="/contact" >
            <Contact loading={loading} setLoading={setLoading} />
          </Route>

          <Route path="/admin" component={Admin} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;