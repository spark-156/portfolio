import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import './App.css';

// pages
const Home = lazy(() => import("./routes/Home"));
const Admin = lazy(() => import("./routes/Admin"));
const NotFoundPage = lazy(() => import("./routes/NotFoundPage"));
const Projects = lazy(() => import("./routes/Projects"));
const Contact = lazy(() => import("./routes/Contact"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/admin" component={Admin} />
          <Route path="/projects" component={Projects} />
          <Route path="/Contact" component={Contact} />
          <Route component={NotFoundPage} />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;