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

const App = () => {
  const [loading, setLoading] = useState(true);
  
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" >
            <Home setLoading={setLoading} loading={loading} />
          </Route>
          <Route path="/admin" component={Admin} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;