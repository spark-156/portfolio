// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

export function AboutPage({ about }) {
    
    return ( <div class="page">
        <div>{about.name}</div>
        <div>{about.text}</div>
    </div>);
}