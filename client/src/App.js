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
  
  return (
    <div>HelloWorld!</div>
  );
};

export default App;