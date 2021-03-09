import React from 'react';

import './Contact.css';

export default function Reference() {

  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  return <section id="reference" style={style}><a style={{color: 'black', textAlign: "center"}} className="contactLink" href="https://nl.wikipedia.org/wiki/Piet_Mondriaan" target="_blank" rel="noreferrer noopener">Inspired by Piet Mondriaan</a></section>
}