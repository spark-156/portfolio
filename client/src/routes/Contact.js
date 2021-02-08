import React from 'react';

import { Spin } from 'antd';

export default function Contact({ loading, setLoading }) {



    return loading ? <Spin id="loading" /> : (
        <section id="contactPage">
            <section id="contactContainer">
                
            </section>
        </section>
    )
}