import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Contact } from './Views/Contact';
import { NotFound } from './Views/NotFound';
import { Index } from './Views/Index';
import { Skills } from './Views/Skills';
import { Projects } from './Views/Projects';

function App() {
  return <Router>
    <Routes>
      <Route path='*' element={<NotFound />} />
      <Route path="/" element={<Index />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router> 
}

export default App;
