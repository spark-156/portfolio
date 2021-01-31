// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

import { AboutSlide } from './components/AboutSlide';


function App() {
  return (
    <div class="swiper-container background">
      <div class="swiper-wrapper">
        <AboutSlide />

        <div class="swiper-button-next"></div>
      </div>
    </div>);
}

export default App;
