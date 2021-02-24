import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import 'antd/dist/antd.css';
import 'swiper/swiper.scss';
import 'swiper/components/autoplay';
import 'swiper/components/effect-cube/effect-cube.scss';

import './App.css';

// pages
const Home = lazy(() => import("./routes/Home"));
const NotFoundPage = lazy(() => import("./routes/NotFoundPage"));

const App = () => {

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" >
            <Home isAdmin={false} />
          </Route>
          <Route path="/admin" >
            <Home isAdmin={true} />
          </Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;